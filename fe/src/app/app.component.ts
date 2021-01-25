import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { CommentModel } from './types/comment.type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  comments: Observable<CommentModel[]>;

  constructor(private service: AppService) {}

  public getComments(): void{
    this.comments = this.service.getComments();
  }

  ngOnInit() {
    this.service.Refresh.subscribe(() => {
      this.getComments();
    })
    this.getComments();
  }

  ngOnDestroy() {
    this.service.Refresh.unsubscribe();
  }

}
