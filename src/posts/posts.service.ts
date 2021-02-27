/* eslint-disable prettier/prettier */
import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post } from './posts.interface';

@Injectable()
export class PostsService {
  public constructor(private readonly http: HttpService) {}

  public getRecentPosts(): Observable<Post[]> {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(
      map((response) => response.data),
    );
  }

  public getPost(id: string): Observable<Post> {
    return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`).pipe(
      map((response) => response.data),
    );
  }
}
