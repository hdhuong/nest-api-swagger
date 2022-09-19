import { ItemsModule } from './items/items.module';
import { Module } from '@nestjs/common';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [PostsModule, ItemsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
