import { NotFoundException } from '@nestjs/common'
import { Repository, FindOptionsWhere } from 'typeorm';

import { AbstractDto } from "./abstract.dto";
import { PlatformModel } from "./platform-model.entity";


export abstract class AbstractCrudService<
  Entity extends PlatformModel,
  CreateDto extends AbstractDto,
  UpdateDto extends AbstractDto
> {
  protected repository: Repository<Entity>;

  async findAll(): Promise<Entity[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<Entity> {
    const instance = await this.repository.findOneBy({ id } as FindOptionsWhere<Entity>);
    if (!instance) {
      throw new NotFoundException(id)
    }
    return instance;
  }

  async create(dto: CreateDto): Promise<Entity> {
    return this.repository.save(dto as any);
  }

  async update(id: string, dto: UpdateDto): Promise<Entity> {
    const instance = await this.findOne(id);
    const updatedInstance = this.repository.merge(instance, dto as any);
    return this.repository.save(updatedInstance);
  }

  async delete(id: string): Promise<Entity> {
    const instance = await this.findOne(id);
    return this.repository.remove(instance);
  }
}