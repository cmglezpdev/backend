import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity } from 'typeorm';

import { PlatformModel } from '../../abstract/platform-model.entity';

@Entity()
@ObjectType()
export class Status extends PlatformModel {
  @Field(() => String)
  @Column('varchar', { unique: true })
  name: string;

  @Field(() => String)
  @Column('varchar')
  description: string;
}