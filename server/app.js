const express = require('express');
const app = express();
const TimeEntry = require('./models/TimeEntry');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/api/time-entry', (req, res) => {
  const timeEntry = new TimeEntry({
    description: 'Marketing plan schrijven',
    duration: 60
  });

  timeEntry.save();

  res.json(timeEntry);
});

app.listen(4000, () => {
  console.log('Example app listening on port 4000!');
});