import { useState } from "react";
import articlesApi from "../Utils/bluedit-api";
function AddComment(props) {
  const { comments, setComments, article_id } = props;

  const [newComment, setNewComment] = useState("");

  const postComment = () => {
    articlesApi.post(`articles/${article_id}/comments`, {
      username:`${commentObj.author}`,
      body:`${commentObj.body}`
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments((currComments) => {
      const commentObj = {
        body: newComment,
        article_id: article_id,
        author: "jessjelly",
        created_at: "Posted Now",
        title: "Please stop worrying about Angular 3",
      };
      console.log(commentObj, "new");
      const upComments = [commentObj, ...currComments];
      return upComments;
    });
    setNewComment("");
    postComment(upComments)
    

    
  }

  return (
    <form onSubmit={handleSubmit} action="">
      <label htmlFor="adding comment">
        Post a comment:
        <input
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          type="text"
        />
      </label>
      <button type="submit"> Send </button>
    </form>
  );
}
export default AddComment;
