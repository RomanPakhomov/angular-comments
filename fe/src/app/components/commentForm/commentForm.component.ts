import { Component, Input } from "@angular/core";
import { AppService } from 'src/app/app.service';
import { CommentModel } from 'src/app/types/comment.type';

@Component({
  selector: 'comment-form',
  templateUrl: 'commentForm.component.html',
  styleUrls: ['commentForm.component.scss']
})
export class CommentForm{
  @Input() parentId: number;
  comment: CommentModel;
  submitted = false; 

  constructor(private service: AppService){
    this.comment = {
      id: null,
      parentId: null,
      authorName: null,
      body: null,
      dateTime: new Date().toString()
    };
  }

  onSubmit() { 
    this.service.saveComment(this.comment);
  }

}