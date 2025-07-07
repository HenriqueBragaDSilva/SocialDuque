import 'reflect-metadata'
import Fastify from "fastify"
import { AppDataSource } from "./data-source"
import { usersRoutes } from "./routes/user-routes"

export async function startApp(){
    const app = Fastify()
    await AppDataSource.initialize().then(
        ()=>{
            console.log('Banco de 🎲 inicializado')
        }
    ).catch((ex)=>{
        console.log('❌ Erro de conexão do banco de dados', ex)
        process.exit(1)
    })

    //registre as rotas e plugins aqui
    app.register(usersRoutes)
    return app
}