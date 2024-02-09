import { useState } from "react";
import articlesApi from "../../Utils/bluedit-api";

function AddComment(props) {
  const { comments, setComments, article_id } = props;
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setComments((currComments) => {
      const commentObj = {
        body: newComment,
        article_id: article_id,
        author: "rogersop",
        created_at: "Posted Now",
        title: "Please stop worrying about Angular 3",
      };
      return [commentObj, ...currComments];
    });
    articlesApi
      .post(`/articles/${article_id}/comments`, {
        userName: "rogersop",
        body: newComment,
      })
      .then((res) => {
        console.log(res, "inside post");
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(newComment);
    setNewComment("");
  };

  // const postComment = () => {
  //   articlesApi.post(`/articles/${article_id}/comments`, {
  //     username: "jessjelly",
  //     body: newComment,
  //   });
  // };

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
