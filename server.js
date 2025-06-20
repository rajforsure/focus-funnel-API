const express = require('express');
const mongoose = require('mongoose');
const funnelRoutes = require('./routes/funnels');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json()); // To parse JSON requests
app.use(cors()); // To allow frontend access
app.use(express.static('public')); // To serve index.html and script.js

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/funnelDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('✅ Connected to MongoDB');
}).catch((err) => {
  console.error('❌ MongoDB connection error:', err);
});

// API Routes
app.use('/funnels', funnelRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
