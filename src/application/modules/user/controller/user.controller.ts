import { type Request, type Response, type NextFunction } from 'express'
import userRepository from '@application/modules/user/repository/user.repository'

interface IUserController {
  find: (req: Request, res: Response, next: NextFunction) => Promise<Response | undefined>
}

class UserController implements IUserController {
  async find(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const result = userRepository.find(req.query)
      return res.status(200).json({
        result
      })
    } catch (err) {
      next(err)
    }
  }
}

export default new UserController()
