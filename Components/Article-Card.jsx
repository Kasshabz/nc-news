import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articlesApi from "../Utils/bluedit-api";

function Article(props) {
  const { article_id } = useParams();

  const { selectedArticle } = props;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    articlesApi
      .get(`/articles/${article_id}/comments`)
      .then(({ data }) => {
        const resComments = Object.values(data.comments);
        setComments(resComments);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>
        <h1>{selectedArticle.title}</h1>
        <img
          src={selectedArticle.article_img_url}
          alt={selectedArticle.title}
        />
        <button>
          Vote
          {selectedArticle.votes}
        </button>
        <p>{selectedArticle.body}</p>
      </div>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id}>
              <p>{comment.author}</p>
              <p>{comment.title}</p>
              <p>{comment.body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Article;
