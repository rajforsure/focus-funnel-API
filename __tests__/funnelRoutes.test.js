const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../server');
const Funnel = require('../models/Funnel');

let createdFunnelId;

beforeAll(async () => {
  await mongoose.connect('mongodb://127.0.0.1:27017/focusfunnel_test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  await Funnel.deleteMany(); // clean before test
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe('Funnel API Integration Tests', () => {
  it('should create a new funnel task', async () => {
    const res = await request(app)
      .post('/api/funnels')
      .send({ task: 'Build portfolio site' });

    expect(res.statusCode).toBe(201);
    expect(res.body.task).toBe('Build portfolio site');
    createdFunnelId = res.body._id;
  });

  it('should fetch all funnel tasks', async () => {
    const res = await request(app).get('/api/funnels');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should delete the created funnel task', async () => {
    const res = await request(app).delete(`/api/funnels/${createdFunnelId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('Funnel deleted');
  });
});
