import 'reflect-metadata'
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('comments')
export class User{
    @PrimaryGeneratedColumn('uuid')
    id!: string
    @Column({type:'varchar',length:300})
   content!:string
    @Column({type:'varchar',length:100})
    user!:string
    @CreateDateColumn()
    create_at!:Date
}