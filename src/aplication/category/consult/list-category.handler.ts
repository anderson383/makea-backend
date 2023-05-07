import { CategoryListDto } from '../comander/dto/category-list.dto';
import { DaoCategory } from '../../../domain/category/dao/dao-category';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListCategoryHandler {
  constructor(private _daoCategory: DaoCategory) {}

  async execute(): Promise<CategoryListDto[]> {
    return this._daoCategory.list();
  }
}
