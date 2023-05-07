import { CreateProductHandler } from '../../../aplication/product/comander/create-product.handler';
import { DaoProduct } from '../../../domain/product/port/dao/dao-product';
import { DaoProductPosgresql } from '../adapter/dao/dao-product-posgresql';
import { GetProductHandler } from '../../../aplication/product/consult/get-product.handler';
import { ListProductHandler } from '../../../aplication/product/consult/list-product.handler';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/infrastructure/config/prisma.module';
import { RepositoryProduct } from '../../../domain/product/port/repository/repository-product';
import { RepositoryProductPostgresql } from '../adapter/repository/repository-product.postgresql';
import { ServiceCreateProductProvider } from './service/service-create-product-provider';
import { ServiceProduct } from '../../../domain/product/service/service-product';

@Module({
  imports: [PrismaModule],
  providers: [
    {
      provide: DaoProduct,
      useClass: DaoProductPosgresql
    },
    {
      provide: ServiceProduct,
      inject: [RepositoryProduct],
      useFactory: ServiceCreateProductProvider
    },
    {
      provide: RepositoryProduct,
      useClass: RepositoryProductPostgresql
    },

    ListProductHandler,
    GetProductHandler,
    CreateProductHandler
  ],
  exports: [
    ServiceProduct,
    GetProductHandler,
    ListProductHandler,
    CreateProductHandler,
    RepositoryProduct
  ]
})
export class ProductProviderModule {}
