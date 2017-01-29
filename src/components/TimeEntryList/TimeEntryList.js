import React, { Component } from 'react';
import * as actions from '../../actions/timeEntry';
import './time-entry-list.css';
import { map } from 'lodash';

class TimeEntryList extends Component {
  componentDidMount() {
    this.props.dispatch(actions.fetchTimeEntries());
  }

  render() {
    const { fetching, entries } = this.props;

    return (
      <div className="TimeEntryList">
        <hr/>
        {fetching ? (
          'Loading...'
        ) : map(entries, (entries, date) => (
          <div key={date}>
            <b>{date}</b>
            <ul>
              {entries.map(entry => (
                <li key={entry._id}>{entry.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default TimeEntryList;
