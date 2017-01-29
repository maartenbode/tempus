const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const lodash = require('lodash');
const moment = require('moment');
const TimeEntry = require('./models/TimeEntry');

// Use body parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Use the static build folder for front-end assets
app.use(express.static('build'));

// Display a listing of all time entries
app.get('/api/time-entry', (req, res) => {
  TimeEntry
  .find()
  .sort({ started_at: -1 })
  .exec((err, entries) => {
    res.json(lodash.groupBy(entries, (entry) => {
      return moment(entry.started_at).format('YYYY-MM-DD');
    }));
  });
});

// Create a new time entry
app.post('/api/time-entry', (req, res) => {
  const timeEntry = new TimeEntry(req.body);
  timeEntry.save();

  res.json(timeEntry);
});

// Delete the given time entry
app.delete('/api/time-entry/:id', (req, res) => {
  TimeEntry.remove({ _id: req.params.id }).exec();

  res.sendStatus(200);
});

// Boot server
app.listen(1748, () => {
  console.log('Example app listening on port 1748!');
});
