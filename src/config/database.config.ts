import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmModuleOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_DB_HOST || 'localhost',
  port: parseInt(<string>process.env.POSTGRES_DB_PORT) || 5432,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || '123456',
  database:
    process.env.POSTGRES_DB_PREFIX + '_' + process.env.POSTGRES_DB_NAME ||
    'nest-practices',
  entities: ['src/entities/**/*.entity.{ts,js}'],
  /* Note : it is unsafe to use synchronize: true for schema synchronization
    on production once you get data in your database. */
  // synchronize: true,
  autoLoadEntities: true,
};

export const connectionOptions = {
  ...typeOrmModuleOptions,
  migrationsTableName: 'migrations',
  migrations: ['src/database/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};
export default connectionOptions;
