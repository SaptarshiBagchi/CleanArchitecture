import { type Router } from 'express'

export interface IModule {
  name: string
  router: Router
}
