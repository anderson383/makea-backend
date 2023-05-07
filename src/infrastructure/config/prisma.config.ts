import { createSchema } from 'schemix';

export const PrismaSchema = createSchema({
  datasource: {
    provider: 'postgresql',
    url: {env: 'DATABASE_URL'}
  },
  generator: {provider: 'prisma-client-js'}
});

export const UserModel = PrismaSchema.createModel('User');

UserModel
  .string('id', {
    id: true,
    default: { uuid: true }
  })
  .int('registrantNumber', { default: { autoincrement: true } })
  .boolean('isBanned', { default: false });

PrismaSchema.export('./', 'schema');
