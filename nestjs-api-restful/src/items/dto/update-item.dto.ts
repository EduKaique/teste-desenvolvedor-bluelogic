import { PartialType } from '@nestjs/mapped-types';
import { CreateItemDto } from './create-item.dto';

export class UpdateItemDto extends PartialType(CreateItemDto) {
  name?: string; //"?" siginifica que é um campo opcional
  description?: string;
}
