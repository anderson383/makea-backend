import { DaoProduct } from '../../../../domain/product/port/dao/dao-product';
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/config/prisma-service';
import { Product } from 'src/domain/product/model/product';

@Injectable()
export class DaoProductPosgresql implements DaoProduct {
  constructor(
    private prismaService: PrismaService
  ) {}

  async list(code:string): Promise<any> {
    const data = await this.prismaService.product.findMany(
      {
        where: {category: {code: code}},
        include: {category: true}
      }
    );

    return data;
  }

  async get(id: string): Promise<any> {
    return await this.prismaService.product.findUnique({where: {id}});
  }
}
