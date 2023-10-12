import { Module } from '@nestjs/common';
import { StatusService } from './status.service';
import { StatusResolver } from './status.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Status } from './entities/status.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Status])
  ],
  providers: [
    StatusService,
    StatusResolver
  ],
  exports: [
    StatusService
  ]
})
export class StatusModule { }