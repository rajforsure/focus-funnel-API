const express = require('express');
const mongoose = require('mongoose');
const funnelRoutes = require('./routes/funnels');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the FocusFunnel API!');
});

app.use('/api/funnels', funnelRoutes);

// Only start server if not running in test mode
if (process.env.NODE_ENV !== 'test') {
  mongoose
    .connect('mongodb://127.0.0.1:27017/focusfunnel', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      app.listen(3000, () => {
        console.log('Server running on port 3000');
      });
    })
    .catch(err => {
      console.error('MongoDB connection error:', err);
    });
}

module.exports = app;