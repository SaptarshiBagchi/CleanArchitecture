import dbConnection from '@infrastructure/db/mongodb/helpers/db-connection'
import env from '@main/config/env'

export default async (): Promise<void> => {
  beforeAll(async () => {
    await dbConnection.connect(env.MONGO_URL)
  })
  afterAll(async () => {
    await dbConnection.disconnect()
  })
}
