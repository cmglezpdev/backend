import { PartialType, InputType } from '@nestjs/graphql';
import { CreateStatusDto } from './create-status.dto';


@InputType()
export class UpdateStatusDto extends PartialType(CreateStatusDto) { }