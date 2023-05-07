import { CategoryController } from './controllers/category.controller';
import { CategoryProviderModule } from './provider/CategoryProvider.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [CategoryProviderModule],
  controllers: [CategoryController]
})
export class CategoryModule {}
