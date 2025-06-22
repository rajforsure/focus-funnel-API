const mongoose = require('mongoose');
const Funnel = require('../models/Funnel');

describe('Funnel Model Test', () => {
  // Connect to a test DB
  beforeAll(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/funneldb_test', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  });

  afterAll(async () => {
    await mongoose.connection.db.dropDatabase();
    await mongoose.connection.close();
  });

  it('should create and save a funnel task successfully', async () => {
    const funnelData = {
      task: 'Learn React',
      steps: ['Install Node.js', 'Set up Vite', 'Write components']
    };
    const validFunnel = new Funnel(funnelData);
    const savedFunnel = await validFunnel.save();

    expect(savedFunnel._id).toBeDefined();
    expect(savedFunnel.task).toBe(funnelData.task);
    expect(savedFunnel.steps.length).toBe(3);
  });

  it('should fetch all funnel tasks', async () => {
    const funnels = await Funnel.find();
    expect(Array.isArray(funnels)).toBe(true);
  });
});
