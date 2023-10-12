import { Type, ParseUUIDPipe } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";

import { AbstractDto } from "./abstract.dto";
import { PlatformModel } from "./platform-model.entity";
import { AbstractCrudService } from './abstract-crud.service';

export function AbstractCrudResolver<
  Entity extends PlatformModel,
  CreateDto extends AbstractDto,
  UpdateDto extends AbstractDto
>(classRef: Type<Entity>, createDto: Type<CreateDto>, updateDto: Type<UpdateDto>) {

  @Resolver({ isAbstract: true })
  abstract class AbstractResolver {
    public service: AbstractCrudService<Entity, CreateDto, UpdateDto>;

    @Query(() => [classRef], { name: `get${classRef.name}` })
    async findAll(): Promise<Entity[]> {
      return this.service.findAll();
    }

    @Query(() => classRef, { name: `get${classRef.name}ById` })
    async findOne(
      @Args('id', { type: () => String }, ParseUUIDPipe) id: string
    ): Promise<Entity> {
      return this.service.findOne(id);
    }

    @Mutation(() => classRef, { name: `create${classRef.name}` })
    async create(
      @Args('input', { type: () => createDto }) input: CreateDto
    ): Promise<Entity> {
      return this.service.create(input);
    }

    @Mutation(() => classRef, { name: `update${classRef.name}` })
    async update(
      @Args('id', { type: () => String }, ParseUUIDPipe) id: string,
      @Args('input', { type: () => updateDto }) input: UpdateDto
    ): Promise<Entity> {
      return this.service.update(id, input);
    }
  }

  return AbstractResolver;
}
