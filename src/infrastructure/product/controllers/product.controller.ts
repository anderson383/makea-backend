import {
  Body, Controller, Get, Param, Post, Query
} from '@nestjs/common';
import { CreateProductHandler } from '../../../aplication/product/comander/create-product.handler';
import { GetProductHandler } from '../../../aplication/product/consult/get-product.handler';
import { ListProductHandler } from '../../../aplication/product/consult/list-product.handler';
import { ProductCreateDto } from '../../../aplication/product/comander/dto/product-create.dto';
import { ProductDto } from '../../../aplication/product/comander/dto/product.dto';

@Controller('product')
export class ProductController {
  constructor(
    private readonly _listProductHandler: ListProductHandler,
    private readonly _getProductHandler: GetProductHandler,
    private readonly _createProductHandler: CreateProductHandler,
  ) {}

  @Get()
  async list(@Query('code') code:string): Promise<ProductDto[]> {
    return this._listProductHandler.execute(code);
  }

  @Get(':id')
  async get(@Param('id') id: string): Promise<ProductDto> {
    return this._getProductHandler.execute(id);
  }

  @Post()
  async save(@Body() createProduct: ProductCreateDto) {
    return this._createProductHandler.execute(createProduct);
  }
}
