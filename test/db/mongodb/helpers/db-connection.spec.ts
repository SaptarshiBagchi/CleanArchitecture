import dbConnection from '@infrastructure/db/mongodb/helpers/db-connection'

describe('Application start test', () => {
  beforeAll(async () => {
    await dbConnection.connect()
  })

  afterAll(async () => {
    await dbConnection.disconnect()
  })

  it('should connect to mongodb', async () => {
    expect(dbConnection.getCollection('catalog')).toBeDefined()
  })
})
