import { ObjectType, Field, ID } from '@nestjs/graphql'
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity()
@ObjectType()
export class Todo {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string;

  @CreateDateColumn()
  @Field(() => Date)
  createdAt: Date;

  @UpdateDateColumn()
  @Field(() => Date)
  updatedAt: Date;

  @Column({ type: 'text' })
  @Field(() => String)
  content: string;

  @Column({ type: 'boolean', default: false })
  @Field(() => Boolean)
  done: boolean;
}