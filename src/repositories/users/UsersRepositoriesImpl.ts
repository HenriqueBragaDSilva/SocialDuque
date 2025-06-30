import { User } from '../../entities/users'
import { AppDataSource } from '../../data-source'
import { IUsersRepository } from './IUsersRepositories'

export class UsersRepository implements IUsersRepository{
    private repository = AppDataSource.getRepository(User)
     
    async create(user: User): Promise<User> {
        const newUser = this.repository.create(user)
        return await this.repository.save(newUser)
    }

     async findById(is: string): Promise<User | null> {
        throw new Error('Method not implemented.')
    }

    findByEmail(email: string): Promise<User | null> {
        throw new Error('Method not implemented.')
    }

    findByPhone(phone: string): Promise<User | null> {
        throw new Error('Method not implemented.')
    }

    update(id: string, data: Partial<User>): Promise<User> {
        throw new Error('Method not implemented.')
    }

    delete(id: string): Promise<void> {
        throw new Error('Method not implemented.')
    }
    
}