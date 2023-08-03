import application from '@main/config/app'
import request from 'supertest'
const app = application()
describe('User module route test', () => {
  it('GET /Users Should return 200 on user find route', async () => {
    const response = await request(app).get('/users')
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/)
  })
})
