import { Router } from 'express'

const setupRoute = (): Router => {
  const router = Router()
  router.route('/').get().post()
  router.route('/:id').get().patch()
  return router
}

const name = 'users'
const router = setupRoute()
export default { name, router }
