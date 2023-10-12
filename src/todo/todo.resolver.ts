import { ParseUUIDPipe } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { Todo } from './entities/todo.entity'
import { TodoService } from './todo.service'
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Resolver(() => Todo)
export class TodoResolver {
  constructor(
    private readonly todoService: TodoService
  ) { }

  @Query(() => [Todo])
  getTodos(): Promise<Todo[]> {
    return this.todoService.getTodos();
  }

  @Query(() => Todo)
  getTodoById(
    @Args('id', ParseUUIDPipe) id: string
  ): Promise<Todo> {
    return this.todoService.getTodoById(id);
  }

  @Mutation(() => Todo, { name: 'createTodo' })
  createTodo(
    @Args('input') createTodoDto: CreateTodoDto
  ): Promise<Todo> {
    return this.todoService.createTodo(createTodoDto);
  }

  @Mutation(() => Todo, { name: 'updateTodo' })
  updateTodo(
    @Args('input') updateTodoDto: UpdateTodoDto
  ): Promise<Todo> {
    return this.todoService.updateTodo(updateTodoDto.id, updateTodoDto);
  }

  @Mutation(() => Todo, { name: 'deleteTodo' })
  deleteTodo(
    @Args('id', ParseUUIDPipe) id: string
  ): Promise<Todo> {
    return this.todoService.deleteTodoById(id);
  }
}