import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './items.interface';

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  private idCounter = 1; //Para gerar IDs únicos

  createItem(CreateItemDto: CreateItemDto): Item {
    const newItem: Item = {
      id: this.idCounter++,
      ...CreateItemDto,
    };
    this.items.push(newItem);
    return newItem;
  }

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: number): Item {
    const item = this.items.find((item) => item.id === id);
    if (!item) {
      throw new NotFoundException(`Item com ID ${id} nao encontrado`);
    }
    return item;
  }

  updateItem(id: number, updateItemDto: UpdateItemDto): Item {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
      throw new NotFoundException(`Item com ID ${id} nao encontrado`);
    }

    const updatedItem = { ...this.items[itemIndex], ...updateItemDto };
    this.items[itemIndex] = updatedItem;
    return updatedItem;
  }

  remove(id: number): void {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex === -1) {
      throw new NotFoundException(`Item com ID ${id} nao encontrado`);
    }
    this.items.splice(itemIndex, 1);
  }
}
