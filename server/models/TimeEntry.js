const mongoose = require('../connection');

const timeEntrySchema = new mongoose.Schema({
  description: { type: String, default: '-' },
  started_at: { type: Date, default: Date.now },
  duration: { type: Number, default: 0 },
});

const TimeEntry = mongoose.model('time_entries', timeEntrySchema);

module.exports = TimeEntry;
