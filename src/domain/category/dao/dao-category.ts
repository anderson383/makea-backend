import { CategoryListDto } from '../../../aplication/category/comander/dto/category-list.dto';

export abstract class DaoCategory {
  abstract listProductsHistory(id: string): Promise<any>;
  abstract list(): Promise<CategoryListDto[]>;
}
