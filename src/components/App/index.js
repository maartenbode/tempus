import React, { Component } from 'react';
import TimeEntryForm from '../TimeEntryForm';
import TimeEntryList from '../TimeEntryList';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="Container">
            <b>Tempus</b>
          </div>
        </div>
        <div className="Container">
          <TimeEntryForm />
          <TimeEntryList />
        </div>
      </div>
    );
  }
}

export default App;
