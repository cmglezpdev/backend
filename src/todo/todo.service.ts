import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>
  ) { }

  async getTodos(): Promise<Todo[]> {
    return await this.todoRepository.find();
  }

  async getTodoById(id: string): Promise<Todo> {
    const todo = await this.todoRepository.findOneBy({ id });
    if (!todo) {
      throw new BadRequestException(`Todo with id ${id} not found.`);
    }
    return todo;
  }

  async createTodo(createTodoDto: CreateTodoDto): Promise<Todo> {
    const todo = this.todoRepository.create(createTodoDto);
    return await this.todoRepository.save(todo);
  }

  async updateTodo(id: string, updateTodoDto: UpdateTodoDto): Promise<Todo> {
    const todo = await this.todoRepository.findOneBy({ id });
    const updatedTodo = this.todoRepository.merge(todo, updateTodoDto);
    return this.todoRepository.save(updatedTodo);
  }

  async deleteTodoById(id: string): Promise<Todo> {
    const todo = await this.todoRepository.findOneBy({ id });
    return this.todoRepository.remove(todo);
  }
}