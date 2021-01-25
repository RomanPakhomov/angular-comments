import { HttpService, Injectable } from '@nestjs/common';
import CommentModel from './types/comment.type';

@Injectable()
export class AppService {
  private comments: CommentModel[] = [
    {
      id: 0,
      parentId: null,
      authorName: 'Eliseo',
      body: 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium',
      dateTime: this.randomDate()
    },{
      id: 1,
      parentId: 0,
      authorName: 'Jayne_Kuhic',
      body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur',
      dateTime: this.randomDate()
    },{
      id: 2,
      parentId: 1,
      authorName: 'JNikita',
      body: 'quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quib',
      dateTime: this.randomDate()
    },{
      id: 3,
      parentId: 1,
      authorName: 'Romula',
      body: 'non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas',
      dateTime: this.randomDate()
    },{
      id: 4,
      parentId: 0,
      authorName: 'Jayne_Kuhic',
      body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur',
      dateTime: this.randomDate()
    },{
      id: 4,
      parentId: null,
      authorName: 'Example',
      body: 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur',
      dateTime: this.randomDate()
    }
  ];

  constructor(private readonly http: HttpService) {}

  randomDate(): string {
    const start = new Date(2020, 0,1);
    const end = new Date();
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toString();
  }

  async getComments(): Promise<CommentModel[]> {
    return this.comments;
  }

  saveComment(comment: CommentModel): void {
    this.comments = [...this.comments, comment];
  }
}
