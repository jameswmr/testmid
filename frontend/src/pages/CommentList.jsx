import { Comment } from "./comment"

export function CommentList({ comments }) {
  return comments.map(comment => (
    <div key={comment.userId} className="comment-stack">
      <Comment {...comment} />
    </div>
  ))
}