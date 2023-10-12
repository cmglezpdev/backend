import { PartialType, InputType } from '@nestjs/graphql';
import { CreateTodoDto } from './create-todo.dto';

@InputType()
export class UpdateTodoDto extends PartialType(CreateTodoDto) { }