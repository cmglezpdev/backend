import { PartialType, InputType } from '@nestjs/graphql';
import { Field, ID } from '@nestjs/graphql';
import { IsUUID } from 'class-validator';

import { CreateTodoDto } from './create-todo.dto';

@InputType()
export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @Field(() => ID)
  @IsUUID()
  id: string;
}