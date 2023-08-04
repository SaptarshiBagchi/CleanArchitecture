import request from 'supertest'
import dbConnection from '@infrastructure/db/mongodb/helpers/db-connection'
import { type Express } from 'express'

describe('User module route test', () => {
  let app: Express
  beforeAll(async () => {
    const application = (await import('@main/config/app')).default
    app = application()
    await dbConnection.connect()
  })

  afterAll(async () => {
    await dbConnection.disconnect()
  })
  it('GET /Users Should return 200 on user find route', async () => {
    const response = await request(app).get('/users')
    expect(response.status).toBe(200)
    expect(response.headers['content-type']).toMatch(/json/)
  })
})
