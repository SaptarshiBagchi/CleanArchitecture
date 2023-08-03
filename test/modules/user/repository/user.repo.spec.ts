import userRepository from '@application/modules/user/repository/user.repository'
describe('User Repository Spec test', () => {
  it('Should return an empty user array when queried with no data', async () => {
    const result = await userRepository.find({})
    expect(result).toHaveLength(0)
  })
})
