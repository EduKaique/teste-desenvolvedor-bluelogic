import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  createItem(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.createItem(createItemDto);
  }

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.itemsService.findOne(+id);
  }

  @Put(':id')
  updateItem(@Param('id') id: number, @Body() updateItemDto: UpdateItemDto) {
    return this.itemsService.updateItem(Number(id), updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number): void {
    return this.itemsService.remove(Number(id));
  }
}
