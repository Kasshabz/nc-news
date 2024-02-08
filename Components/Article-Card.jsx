import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articlesApi from "../Utils/bluedit-api";
import AddComment from "./CommentAdder";

function Article(props) {
  const { article_id } = useParams();

  const { selectedArticle, isLoading, setIsLoading, setArticles, articles } =
    props;
  const [comments, setComments] = useState([]);
  const [votes, setVotes] = useState(0);
  const [articleCard, setArticleCard] = useState(selectedArticle + 1);

  articlesApi
    .get(`/articles/${article_id}`)
    .then(({ data }) => {
      const articleSelected = data.article;

      setArticleCard(articleSelected);
    })
    .catch((err) => {
      console.log(err);
    });

  useEffect(() => {
    articlesApi
      .get(`/articles/${article_id}/comments`)
      .then(({ data }) => {
        const resComments = Object.values(data.comments);
        setComments(resComments);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleVote = (e) => {
    e.preventDefault();
    setVotes((currentVotes) => {
      return currentVotes + 1;
    });
    articlesApi
      .patch(`/articles/${article_id}`, { inc_votes: 1 })
      .then(({ data }) => {});
  };

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div>
        <h1>{articleCard.title}</h1>
        <img src={articleCard.article_img_url} alt={articleCard.title} />
        <button onClick={handleVote}>
          Vote
          {votes + articleCard.votes}
        </button>
        <p>{articleCard.body}</p>
      </div>
      <div className="comments-list">
        Comments
        {comments.map((comment) => {
          return (
            <p key={comment.comment_id} className="comment-list-comment">
              <p> UserName: {comment.author}</p>

              <p> {comment.title}</p>

              <p> {comment.body}</p>

              {comment.created_at}
            </p>
          );
        })}
      </div>

      <AddComment
        comments={comments}
        setComments={setComments}
        article_id={article_id}
      />
    </>
  );
}
export default Article;
