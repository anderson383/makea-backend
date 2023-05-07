import { Product } from '../../../../domain/product/model/product';
import { RepositoryProduct } from '../../../../domain/product/port/repository/repository-product';

export class RepositoryProductPostgresql implements RepositoryProduct {
  constructor(
  ) {}

  async save(product: Product) {
    // mutations database
  }
}
