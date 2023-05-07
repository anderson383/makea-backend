import { DaoProduct } from '../../../domain/product/port/dao/dao-product';
import { Injectable } from '@nestjs/common';
import { ProductDto } from '../comander/dto/product.dto';

@Injectable()
export class ListProductHandler {
  constructor(private _daoProduct: DaoProduct) {}

  async execute(code:string): Promise<ProductDto[]> {
    return this._daoProduct.list(code);
  }
}
