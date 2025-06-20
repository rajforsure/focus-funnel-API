const mongoose = require('mongoose');

const funnelSchema = new mongoose.Schema({
  task: String,
  category: String,
  urgency: String,
  timeAvailable: String,
  experienceLevel: String,
  steps: [String],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Funnel', funnelSchema);
