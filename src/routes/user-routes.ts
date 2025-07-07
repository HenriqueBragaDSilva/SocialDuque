import { FastifyInstance } from "fastify";
import { CreateUserController } from "../controllers/user/CreateUserController";
import { ListUsersController } from "../controllers/user/ListUsersController";
import { FindUserByIdController } from "../controllers/user/FindUserByIdController";
import { DeleteUserController } from "../controllers/user/DeleteUserController";
import { UpdateUserController } from "../controllers/user/UpdateUserController";
const createUserController = new CreateUserController()
const listUserController = new ListUsersController()
const findByIdController = new FindUserByIdController()
const deleteUserController = new DeleteUserController()
const updateUserController = new UpdateUserController()
export async function usersRoutes (app: FastifyInstance){
    app.post('/users', createUserController.handle)
    app.get('/users', listUserController.handle)
    app.get('/users/:id', findByIdController.handle)
    app.put('/users/update/:id', updateUserController.handle)
    app.delete('/users/delete/:id', deleteUserController.handle)
  }