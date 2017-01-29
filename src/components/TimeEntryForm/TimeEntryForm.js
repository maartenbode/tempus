import React, { Component } from 'react';
import moment from 'moment';
import './time-entry-form.css';

class TimeEntryForm extends Component {
  handleRequest() {
    console.log(this);
  }

  render() {
    return (
      <div className="TimeEntryForm">
        <h3>New Entry</h3>
        <input type="text" placeholder="Description"/>
        <input type="date" defaultValue={moment().format('YYYY-MM-DD')}/>
        <input type="number" placeholder="Minutes"/>
        <button onClick={this.handleRequest.bind(this)}>Start Timer</button>
      </div>
    );
  }
}

export default TimeEntryForm;
