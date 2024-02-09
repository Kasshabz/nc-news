function DeleteComment(props) {
  const { setComments, comments, article_id } = props;

  const handleDelete = (e) => {
    console.log(e.target);
    console.log(comments.comment_id);
    console.log("deleted");
    setComments((currComments)=>{
        return [...currComments.filter(comments=>comments.comment_id !== comments.comment_id)]
    })
   
  };
  return <button onClick={handleDelete}>DELETE COMMENT</button>;
}

export default DeleteComment;
