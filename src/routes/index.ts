import { Router } from 'express'
import { UserRoute } from '../modules/User/user.route';

const router = Router()

const applicationRoutes = [
  {
    path: '/auth',
    route: UserRoute, // component name
  },
]

applicationRoutes.forEach(route => router.use(route.path, route.route))

export default router
