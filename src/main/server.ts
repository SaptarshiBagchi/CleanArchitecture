import 'module-alias/register'
import DbConnection from '@infrastructure/db/mongodb/helpers/db-connection'
import env from '@main/config/env'
import setupApp from '@main/config/app'

DbConnection.connect(env.MONGO_URL)
  .then(() => {
    console.log('DB Connected')
    const app = setupApp()
    app.listen(env.port, () => {
      console.log('Server Running On Port', env.port)
    })
  })
  .catch(() => {})
