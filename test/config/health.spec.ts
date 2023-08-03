import application from '@main/config/app'
import request from 'supertest'
const app = application()
describe('Health Checks', () => {
  it('GET /health Should return 200 on health route', async () => {
    const response = await request(app).get('/health')
    expect(response.status).toBe(200)
    return true
  })
})
