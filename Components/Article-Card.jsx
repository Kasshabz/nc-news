import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articlesApi from "../Utils/bluedit-api";

function Article(props) {
  const { article_id } = useParams();

  const { selectedArticle, isLoading, setIsLoading, setArticles, articles } =
    props;
  const [comments, setComments] = useState([]);
  const [votes, setVotes] = useState(0);
  const [articleCard,setArticleCard] = useState(selectedArticle +1)

  articlesApi.get(`/articles/${article_id}`).then(({ data }) => {
    const articleSelected = data.article;
    console.log(articleSelected);
    setArticleCard(articleSelected);
  }).catch((err)=>{
    console.log(err);
  })

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
    console.log("voted");
    setVotes((currentVotes) => {
      return currentVotes + 1;
    });
    articlesApi
      .patch(`/articles/${article_id}`, { inc_votes: 1 })
      .then(({ data }) => {
        console.log(data, "line 29");
      });
  };

  
   


  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div>
        <h1>{articleCard.title}</h1>
        <img
          src={articleCard.article_img_url}
          alt={articleCard.title}
        />
        <button onClick={handleVote}>
          Vote
          {votes + articleCard.votes}
        </button>
        <p>{articleCard.body}</p>
      </div>
      <ul className="comments-list">
        Comments
        {comments.map((comment) => {
          return (
            <li className="comment-list-comment" key={comment.comment_id}>
              {comment.author}
              {comment.title}
              {comment.body}
              {comment.created_at}
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default Article;
