const moment = require('moment');
const lodash = require('lodash');
const TimeEntry = require('../models/TimeEntry');

module.exports = (app) => {
  // Display a listing of all time entries
  app.get('/api/time-entry', (req, res) => {
    TimeEntry.
      find().
      sort({ started_at: -1 }).
      exec((err, entries) => {
        res.json(lodash.groupBy(entries, (entry) => {
          return moment(entry.started_at).format('YYYY-MM-DD')
        }));
      });
  });

  // Create a new time entry
  app.post('/api/time-entry', (req, res) => {
    TimeEntry.create(req.body, (err, entry) => {
      res.json(entry);
    });
  });

  // Delete the given time entry
  app.delete('/api/time-entry/:id', (req, res) => {
    TimeEntry.remove({ _id: req.params.id }, () => {
      res.sendStatus(200);
    });
  });
};
