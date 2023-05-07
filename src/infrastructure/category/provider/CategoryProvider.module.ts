import { DaoCategory } from '../../../domain/category/dao/dao-category';
import { DaoCategoryPostgresql } from '../adapter/dao/dao-category-postgresql';
import { ListCategoryHandler } from '../../../aplication/category/consult/list-category.handler';
import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/infrastructure/config/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [
    ListCategoryHandler,
    {
      provide: DaoCategory,
      useClass: DaoCategoryPostgresql
    }
  ],
  exports: [
    ListCategoryHandler
  ]
})
export class CategoryProviderModule {}
