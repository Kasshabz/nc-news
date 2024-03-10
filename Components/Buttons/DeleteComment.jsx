import articlesApi from "../../Utils/bluedit-api";
function DeleteComment(props) {
  const { setComments, comments, article_id } = props;

  const handleDelete = (e) => {
    console.log(e.target);

    console.log("deleted");
    setComments((currComments) => {
      return [
        ...currComments.filter(
          (comment) => comment.comment_id !== comments.comment_id
        ),
      ];
    });
    articlesApi.delete(`/comments/${comments.comment_id}`);
  };
  return <button onClick={handleDelete}>DELETE COMMENT</button>;
}

export default DeleteComment;
