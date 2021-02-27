import { Test, TestingModule } from '@nestjs/testing';
import { PostsMapper } from './posts.mapper';

describe('PostsMapper', () => {
  let service: PostsMapper;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PostsMapper],
    }).compile();

    service = module.get<PostsMapper>(PostsMapper);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
