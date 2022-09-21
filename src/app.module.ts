import { ItemsModule } from './components/items/items.module';
import { Module } from '@nestjs/common';
import { PostsModule } from './components/posts/posts.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import connectionOptions from './config/database.config';

@Module({
  imports: [PostsModule, ItemsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
