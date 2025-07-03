import { FastifyInstance } from 'fastify'
import { UsersController } from '../controllers/user/CreateUserController'

const controller = new UsersController()

export async function usersRoutes(app: FastifyInstance) {
  app.post('/users', controller.create)
  app.get('/users', controller.findAll)
  app.get('/users/:id', controller.findById)
  app.put('/users/:id', controller.update)
  app.delete('/users/:id', controller.delete)
}

