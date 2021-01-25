import { Component, Input, OnInit } from '@angular/core';
import { CommentModel } from 'src/app/types/comment.type';

@Component({
  selector: 'comment',
  templateUrl: 'comment.component.html',
  styleUrls: ['comment.component.scss']
})
export class Comment implements OnInit{
  @Input() data: CommentModel;
  public date: Date;
  public showForm: boolean;

  ngOnInit() {
    this.showForm = false;
    this.date = new Date(this.data.dateTime);
  }

  createComment() {
    this.showForm = !this.showForm;
  }

  getAuthor() {
    return this.data.authorName;
  }

  getBody() {
    return this.data.body;
  }

  getChilds() {
    return this.data.childs.sort((a,b) => new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime());
  }

  getCommentId() {
    return this.data.id;
  }

}