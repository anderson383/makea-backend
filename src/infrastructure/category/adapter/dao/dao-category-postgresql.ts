
import { CategoryListDto } from '../../../../aplication/category/comander/dto/category-list.dto';
import { DaoCategory } from '../../../../domain/category/dao/dao-category';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/config/prisma-service';


@Injectable()
export class DaoCategoryPostgresql implements DaoCategory {
  constructor(private prisma: PrismaService) {

  }


  async listProductsHistory(id: string): Promise<any> {

  }

  async list(): Promise<any> {
    // const query = createQueryBuilder<CategoryListDto>('Category', 'c').select([
    //   'c.id',
    //   'c.name'
    // ]);
    const data = await this.prisma.category.findMany();

    // return query.getMany();

    return data;
  }
}
