import dbConnection from '@infrastructure/db/mongodb/helpers/db-connection'
describe('User Repository Spec test', () => {
  let userRepository: any
  beforeAll(async () => {
    await dbConnection.connect()
    userRepository = (await import('@application/modules/user/repository/user.repository')).default
  })

  afterAll(async () => {
    await dbConnection.disconnect()
  })
  it('Should return an empty user array when queried with no data', async () => {
    const result = await userRepository.find({})
    expect(result).toHaveLength(0)
  })
})
