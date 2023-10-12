import { Injectable } from '@nestjs/common';
import { AbstractCrudService } from '../abstract/abstract-crud.service';
import { Status } from './entities/status.entity';
import { CreateStatusDto, UpdateStatusDto } from './dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StatusService extends AbstractCrudService<
  Status, CreateStatusDto, UpdateStatusDto
> {
  constructor(
    @InjectRepository(Status)
    repository: Repository<Status>
  ) {
    super()
    this.repository = repository;
  }

}