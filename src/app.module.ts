import { ItemsModule } from './components/items/items.module';
import { Module } from '@nestjs/common';
import { PostsModule } from './components/posts/posts.module';

@Module({
  imports: [PostsModule, ItemsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
