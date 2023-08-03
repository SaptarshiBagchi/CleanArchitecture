import { Router, type RequestHandler } from 'express'
import userController from './controller/user.controller'

const setupRoute = (): Router => {
  const router = Router()
  router.route('/').get(userController.find as RequestHandler)
  // .post()
  // router.route('/:id').get().patch().delete()
  // console.log('Setting up user router')
  return router
}

const name = '/users'
const router = setupRoute()
export default { name, router }
