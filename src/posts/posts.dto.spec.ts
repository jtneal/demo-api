import { PostDto } from './posts.dto';

describe('PostDto', () => {
  it('should be defined', () => {
    expect(new PostDto()).toBeDefined();
  });
});
