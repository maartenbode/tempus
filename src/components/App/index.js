import React, { Component } from 'react';
import TimeEntryForm from '../TimeEntryForm';
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
        <TimeEntryForm />
      </div>
    );
  }
}

export default App;
