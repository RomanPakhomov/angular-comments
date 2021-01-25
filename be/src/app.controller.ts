import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import CommentModel from './types/comment.type';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getComments(): CommentModel[] {
    return this.appService.getComments();
  }

  @Post()
  saveComment(@Body() comment: CommentModel): void {
    return this.appService.saveComment(comment);
  }
}
