import React, { Component } from 'react';
import moment from 'moment';
import './time-entry-form.css';
import * as actions from '../../actions/timeEntry';
import store from '../../store';

class TimeEntryForm extends Component {
  componentDidMount() {
    store.subscribe(() => {
      if (store.getState().lastAction.type === 'STORE_TIME_ENTRY_FULFILLED') {
        this.props.dispatch(actions.fetchTimeEntries());
      }
    });
  }

  handleRequest() {
    this.props.dispatch(actions.storeTimeEntry({
      description: this.description.value,
      started_at: this.started_at.value,
      duration: this.duration.value,
    }));
  }

  render() {
    return (
      <div className="TimeEntryForm">
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
        <button onClick={this.handleRequest.bind(this)}>{this.duration && this.duration.value ? 'Save': 'Start Timer'}</button>
      </div>
    );
  }
}

export default TimeEntryForm;
