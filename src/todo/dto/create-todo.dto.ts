import { Field, InputType } from '@nestjs/graphql'
import { IsBoolean, IsOptional, IsString, MaxLength, MinLength } from 'class-validator';


@InputType()
export class CreateTodoDto {
  @Field(() => String)
  @IsString()
  @MinLength(2)
  @MaxLength(400)
  content: string;

  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, { nullable: true })
  done?: boolean;
}