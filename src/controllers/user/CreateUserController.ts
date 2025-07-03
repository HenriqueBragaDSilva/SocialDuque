import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateUserUseCase } from '../../usecases/users/create-user-usecase'
import { UsersRepository } from '../../repositories/users/UsersRepositoriesImpl'

const userRepo = new UsersRepository()
export class UsersController {
async create(request: FastifyRequest, reply: FastifyReply) {
  try {
    const usecase = new CreateUserUseCase(userRepo)
    const result = await usecase.execute(request.body as any)
    return reply.status(201).send(result)
  } catch (error: any) {
    return reply.status(400).send({ error: error.message })
  }
}
async findAll(request: FastifyRequest, reply: FastifyReply) {
  const usecase = new FindAllUsersUseCase(userRepo)
  const users = await usecase.execute()
  return reply.send(users)
}
async findById(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
  try {
    const usecase = new FindUserByIdUseCase(userRepo)
    const user = await usecase.execute(request.params.id)
    return reply.send(user)
  } catch (error: any) {
    return reply.status(404).send({ error: error.message })
  }
}
async update(request: FastifyRequest<{ Params: { id: string }; Body: any }>, reply: FastifyReply) {
  try {
    const usecase = new UpdateUserUseCase(userRepo)
    const updated = await usecase.execute(request.params.id, request.body)
    return reply.send(updated)
  } catch (error: any) {
    return reply.status(400).send({ error: error.message })
  }
}
async delete(request: FastifyRequest<{ Params: { id: string } }>, reply: FastifyReply) {
  try {
    const usecase = new DeleteUserUseCase(userRepo)
    await usecase.execute(request.params.id)
    return reply.status(204).send()
  } catch (error: any) {
    return reply.status(400).send({ error: error.message })
  }
}
}
