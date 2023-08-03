import { type Express, type Request, type Response } from 'express'
import userRouter from '@application/modules/user/routes'

export default (app: Express): void => {
  app.get('/health', (_: Request, res: Response) => {
    return res.status(200).json({ message: 'ok' })
  })

  // console.log(userRouter)
  app.use(userRouter.name, userRouter.router)

  // console.log(app._router.stack)
}
