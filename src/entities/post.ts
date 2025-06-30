import 'reflect-metadata'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('post')
export class User{
    @PrimaryGeneratedColumn('uuid')
    id!: string
    @Column({type:'varchar',length:300})
   content!:string
    @CreateDateColumn()
    create_at!:Date
    @Column({type:'varchar',length:100})
    user!:string
    @Column({type:'varchar',length:300})
   coments!:string
}