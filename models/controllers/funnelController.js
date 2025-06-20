const Funnel = require('../models/Funnel');
const generateSteps = require('../utils/stepGenerator');

exports.generateFunnel = (req, res) => {
  const { task, category, urgency, timeAvailable, experienceLevel } = req.body;
  const steps = generateSteps(task);
  res.json({ task, category, urgency, timeAvailable, experienceLevel, steps });
};

exports.createFunnel = async (req, res) => {
  const funnel = new Funnel(req.body);
  await funnel.save();
  res.status(201).json(funnel);
};

exports.getFunnel = async (req, res) => {
  const funnel = await Funnel.findById(req.params.id);
  res.json(funnel);
};

exports.updateFunnel = async (req, res) => {
  const funnel = await Funnel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(funnel);
};

exports.deleteFunnel = async (req, res) => {
  await Funnel.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
