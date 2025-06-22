const express = require('express');
const router = express.Router();
const Funnel = require('../models/Funnel');

// Create a funnel task
router.post('/', async (req, res) => {
  try {
    const newFunnel = new Funnel(req.body);
    const saved = await newFunnel.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create funnel' });
  }
});

// Get all funnel tasks
router.get('/', async (req, res) => {
  try {
    const funnels = await Funnel.find();
    res.status(200).json(funnels);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch funnels' });
  }
});

// Delete a funnel task
router.delete('/:id', async (req, res) => {
  try {
    const result = await Funnel.findByIdAndDelete(req.params.id);
    if (!result) {
      return res.status(404).json({ error: 'Funnel not found' });
    }
    res.status(200).json({ message: 'Funnel deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Delete failed' });
  }
});

module.exports = router;
