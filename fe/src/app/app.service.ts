import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommentModel } from './types/comment.type';

@Injectable()
export class AppService{
  private readonly commentsUrl = '/api';
  private refresh = new Subject<void>();
  comments: CommentModel[];

  constructor(private http: HttpClient) {}

  get Refresh() {
    return this.refresh;
  }

  getComments(): Observable<CommentModel[]> {
    return this.http.get<CommentModel[]>(this.commentsUrl)
      .pipe(
        map(comments => this.castComments(comments))
      );
  }

  async saveComment(comment: CommentModel) {
    const body = { ...comment};
    const headers = new HttpHeaders({'Content-Type': 'application/json' });
    await this.http.post(this.commentsUrl, body, { headers} )
      .toPromise()
      .then(() => this.refresh.next())
  }

  castComments(comments: CommentModel[]) {
    let castedComments = [] as CommentModel[];
    let newComments = comments.map(c => ({...c, childs: []}));
    newComments.forEach(comment => {
      if(comment.parentId !== null) {
        newComments[comment.parentId].childs.push(comment);
      } else {
        castedComments.push(newComments[comment.id]);
      }
    })
    return castedComments;
  }
}