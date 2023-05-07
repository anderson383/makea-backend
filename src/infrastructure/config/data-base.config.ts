import { ConfigService } from '@nestjs/config';
import { EnvVariables } from './env/env-variables.enum';

export const dataBaseConfigFactory = (configService: ConfigService) => ({
  type: configService.get(EnvVariables.DATABASE_TYPE),
  host: configService.get(EnvVariables.DATABASE_HOST),
  port: configService.get(EnvVariables.DATABASE_PORT),
  username: configService.get(EnvVariables.DATABASE_USER),
  password: configService.get(EnvVariables.DATABASE_PASSWORD),
  database: configService.get(EnvVariables.DATABASE_NAME),
  synchronize: true,
  logging: true,
});
