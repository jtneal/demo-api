import { Injectable } from '@nestjs/common';
import { PostDto } from './posts.dto';
import { Post } from './posts.interface';

@Injectable()
export class PostsMapper {
  public static mapRecentPosts(post: Post[]): PostDto[] {
    return post.reverse().slice(0, 10).map(PostsMapper.mapRecentPost);
  }

  public static mapRecentPost(post: Post): PostDto {
    return {
      id: post.id,
      title: post.title,
    };
  }

  public static mapPost(post: Post): PostDto {
    return {
      body: post.body,
      id: post.id,
      title: post.title,
    };
  }
}
