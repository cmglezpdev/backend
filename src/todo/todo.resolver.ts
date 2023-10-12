import { Resolver } from '@nestjs/graphql';

import { Todo } from './entities/todo.entity'
import { TodoService } from './todo.service'
import { CreateTodoDto, UpdateTodoDto } from './dto';
import { AbstractCrudResolver } from '../abstract/abstract-crud.resolver';

@Resolver(() => Todo)
export class TodoResolver extends AbstractCrudResolver(
  Todo, CreateTodoDto, UpdateTodoDto
) {
  constructor(todoService: TodoService) {
    super();
    this.service = todoService
  }
}