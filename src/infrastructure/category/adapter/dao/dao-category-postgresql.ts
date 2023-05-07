
import { CategoryListDto } from '../../../../aplication/category/comander/dto/category-list.dto';
import { DaoCategory } from '../../../../domain/category/dao/dao-category';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/config/prisma-service';

@Injectable()
export class DaoCategoryPostgresql implements DaoCategory {
  constructor(private prisma: PrismaService) {

  }

  async listProductsHistory(id: string): Promise<any> {
    console.warn('no implemented');
  }

  async list(): Promise<any> {
    const data = await this.prisma.category.findMany();

    return data;
  }
}
