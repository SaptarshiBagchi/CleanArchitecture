import dbConnection from '@infrastructure/db/mongodb/helpers/db-connection'
import env from '@main/config/env'

describe('Application start test', () => {
  beforeAll(async () => {
    await dbConnection.connect(env.MONGO_URL)
  })

  afterAll(async () => {
    await dbConnection.disconnect()
  })

  it('should connect to mongodb', async () => {
    expect(await dbConnection.getCollection('catalog')).toBeDefined()
  })
})
