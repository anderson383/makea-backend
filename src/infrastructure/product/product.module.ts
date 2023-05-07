import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { ProductProviderModule } from './Provider/ProductProvider.module';

@Module({
  controllers: [ProductController],
  imports: [ProductProviderModule]
})
export class ProductModule {}
