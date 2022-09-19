import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import CreateItemDto from './dto/createItem.dto';
import { IItem } from './item.interface';
import UpdateItemDto from './dto/updateItem.dto';

@Injectable()
export default class ItemsService {
  private lastItemId = 0;
  private items: IItem[] = [];

  getAllItems() {
    return this.items;
  }

  getItemById(id: number) {
    const item = this.items.find((item) => item.id === id);
    if (item) {
      return item;
    }
    throw new HttpException('Item not found', HttpStatus.NOT_FOUND);
  }

  replaceItem(id: number, item: UpdateItemDto) {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex > -1) {
      this.items[itemIndex] = item;
      return item;
    }
    throw new HttpException('Item not found', HttpStatus.NOT_FOUND);
  }

  createItem(item: CreateItemDto) {
    const newItem = {
      id: ++this.lastItemId,
      ...item,
    };
    this.items.push(newItem);
    return newItem;
  }

  deleteItem(id: number) {
    const itemIndex = this.items.findIndex((item) => item.id === id);
    if (itemIndex > -1) {
      this.items.splice(itemIndex, 1);
    } else {
      throw new HttpException('Item not found', HttpStatus.NOT_FOUND);
    }
  }
}
