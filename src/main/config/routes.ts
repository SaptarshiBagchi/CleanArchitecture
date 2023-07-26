import { type Express, type Request, type Response, Router } from 'express'

export default (app: Express): void => {
  const router = Router()
  app.get('/health', (_: Request, res: Response) => {
    return res.status(200).json({ message: 'ok' })
  })
  app.use(router)
}
