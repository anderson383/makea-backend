import {
  Controller, Get, Param
} from '@nestjs/common';
import { ListCategoryHandler } from '../../../aplication/category/consult/list-category.handler';

@Controller('category')
export class CategoryController {
  constructor(
    private _listCategory: ListCategoryHandler,
  ) {}

  @Get('/list')
  async list() {
    return this._listCategory.execute();
  }
}
