import { InputType, Field } from '@nestjs/graphql';
import { IsString, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CreateStatusDto {
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  @Field(() => String)
  name: string;

  @IsString()
  @MinLength(5)
  @MaxLength(255)
  @Field(() => String)
  description: string;
}