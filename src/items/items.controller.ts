import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import CreateItemDto from './dto/createItem.dto';
import UpdateItemDto from './dto/updateItem.dto';
import ItemsService from './items.service';

@Controller('items')
export default class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  getAllItems() {
    return this.itemsService.getAllItems();
  }

  @Get(':id')
  getItemById(@Param('id') id: string) {
    return this.itemsService.getItemById(Number(id));
  }

  @Post()
  async createItem(@Body() item: CreateItemDto) {
    return this.itemsService.createItem(item);
  }

  @Put(':id')
  async replaceItem(@Param('id') id: string, @Body() item: UpdateItemDto) {
    return this.itemsService.replaceItem(Number(id), item);
  }

  @Delete(':id')
  async deleteItem(@Param('id') id: string) {
    this.itemsService.deleteItem(Number(id));
  }
}
