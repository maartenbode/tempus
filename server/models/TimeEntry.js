const mongoose = require('../connection');

const timeEntrySchema = new mongoose.Schema({
  description:  String,
  started_at: { type: Date, default: Date.now },
  duration: Number
});

const TimeEntry = mongoose.model('time_entries', timeEntrySchema);

module.exports = TimeEntry;
