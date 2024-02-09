import AddComment from "./CommentAdder";
function CommentCard(props) {
  const { article_id, comments, setComments } = props;

  return (
    <div key={comments.comment_id}>
      <AddComment
        comments={comments}
        setComments={setComments}
        article_id={article_id}
      />
      {comments.map((comment) => {
        return (
          <>
            <section className="comment-list-comment">
              <p key={comment.author}> UserName: {comment.author}</p>

              <p key={comment.title}> {comment.title}</p>

              <p key={"body"}> {comment.body}</p>

              <p key={"date"}>{comment.created_at}</p>
            </section>
          </>
        );
      })}
    </div>
  );
}
export default CommentCard;
