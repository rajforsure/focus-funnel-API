const request = require('supertest');
const app = require('../server'); // Make sure you export your Express app in server.js

describe('API Server Health Check', () => {
  it('should return 200 OK from / route', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});
