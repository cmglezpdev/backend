import { Resolver } from "@nestjs/graphql";

import { Status } from "./entities/status.entity";
import { AbstractCrudResolver } from "src/abstract/abstract-crud.resolver";
import { CreateStatusDto, UpdateStatusDto } from "./dto";
import { StatusService } from "./status.service";


@Resolver(() => Status)
export class StatusResolver extends AbstractCrudResolver(
  Status, CreateStatusDto, UpdateStatusDto
) {
  constructor(service: StatusService) {
    super()
    this.service = service;
  }
}