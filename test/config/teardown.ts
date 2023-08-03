// GlobalTeardown does not have ts by efault
import 'tsconfig-paths/register'
import dbConnection from '@infrastructure/db/mongodb/helpers/db-connection'
// dbConnection.disconnect()
export default async (): Promise<void> => {
  //   const dbConnection = (await import('@infrastructure/db/mongodb/helpers/db-connection')).default
  await dbConnection.disconnect()
}
