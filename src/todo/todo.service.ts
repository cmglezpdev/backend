import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { Todo } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { AbstractCrudService } from 'src/abstract/abstract-crud.service';

@Injectable()
export class TodoService extends AbstractCrudService<
  Todo, CreateTodoDto, UpdateTodoDto
> {
  constructor(
    @InjectRepository(Todo)
    todoRepository: Repository<Todo>
  ) {
    super();
    this.repository = todoRepository;
  }
}