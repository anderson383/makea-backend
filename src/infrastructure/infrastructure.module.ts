import {
  ConfigModule, ConfigService
} from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { dataBaseConfigFactory } from './config/data-base.config';
import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';

@Module({imports: [
  ConfigModule.forRoot({
    envFilePath: `env/${ process.env.NODE_ENV }.env`,
    isGlobal: true
  }),
  ProductModule,
  CategoryModule
] })
export class InfrastructureModule {}
