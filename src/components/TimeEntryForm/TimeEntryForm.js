import React, { Component } from 'react';
import moment from 'moment';
import * as actions from '../../actions/timeEntry';
import store from '../../store';

class TimeEntryForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timer: false,
    }
  }

  componentDidMount() {
    store.subscribe(() => {
      if (store.getState().lastAction.type === 'STORE_TIME_ENTRY_FULFILLED') {
        this.props.dispatch(actions.fetchTimeEntries());
      }
    });
  }

  resetTimer() {
    this.duration.value = 0;
  }

  startTimer() {
    this.setState({ timer: true });
    this.resetTimer();

    this.timer = setInterval(() => {
      this.duration.value++;
    }, 60000);
  }

  stopTimer() {
    this.setState({ timer: false });

    clearInterval(this.timer);
  }

  resetForm() {
    this.setState({ timer: false });

    this.description.value = '';
    this.duration.value = '';
  }

  handleRequest() {
    if (!this.duration.value) {
      this.startTimer();
      return;
    }

    if (this.state.timer) {
      this.stopTimer();
      return;
    }

    this.props.dispatch(actions.storeTimeEntry({
      description: this.description.value,
      started_at: this.started_at.value,
      duration: this.duration.value,
    }));

    this.resetForm();
  }

  render() {
    return (
      <div className="TimeEntryForm Card">
        <h3>New Entry</h3>
        <input
          type="text"
          placeholder="Description"
          ref={(input) => { this.description = input; }}
        />
        <input
          type="date"
          defaultValue={moment().format('YYYY-MM-DD')}
          ref={(input) => { this.started_at = input; }}
        />
        <input
          type="number"
          placeholder="Minutes"
          ref={(input) => { this.duration = input; }}
        />
        <button
          onClick={this.handleRequest.bind(this)}
        >
          {this.state.timer ? 'Stop' : 'Save'}
        </button>
      </div>
    );
  }
}

export default TimeEntryForm;
