export default interface CommentModel {
  id: number;
  parentId: number;
  dateTime: string;
  authorName: string;
  body: string;
}