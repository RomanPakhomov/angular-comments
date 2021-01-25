export interface CommentModel {
  id: number;
  parentId: number;
  authorName: string;
  body: string;
  dateTime: string;
  childs?: CommentModel[];
};