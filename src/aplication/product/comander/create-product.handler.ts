import {Injectable} from '@nestjs/common';
import {Product} from '../../../domain/product/model/product';
import {ProductCreateDto} from './dto/product-create.dto';
import {ServiceProduct} from '../../../domain/product/service/service-product';

@Injectable()
export class CreateProductHandler {
  constructor(private _serviceProduct: ServiceProduct) {

  }

  async execute(productCreateDto: ProductCreateDto) {
    await this._serviceProduct.execute(
      new Product(
        productCreateDto.name,
        productCreateDto.note,
        productCreateDto.image,
        productCreateDto.category
      )
    );
  }
}
