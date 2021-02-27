import { HttpModule, Module } from '@nestjs/common';

import { PostsController } from './posts.controller';
import { PostsMapper } from './posts.mapper';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  imports: [HttpModule],
  providers: [PostsMapper, PostsService],
})
export class PostsModule {}
