import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import articlesApi from "../Utils/bluedit-api";
import VoteButton from "./Buttons/Votes-Button";
import CommentCard from "./Comments/Comment-Card";

function Article() {
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState([]);
  const [comments, setComments] = useState([]);

  const [articleCard, setArticleCard] = useState([]);

  useEffect(() => {
    articlesApi
      .get(`/articles/${article_id}`)
      .then(({ data }) => {
        const articleSelected = data.article;
        setArticleCard(articleSelected);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      <div>
        <h1>{articleCard.title}</h1>
        <img src={articleCard.article_img_url} alt={articleCard.title} />
        <VoteButton articleCard={articleCard} />
        <p>{articleCard.body}</p>
      </div>
      <div className="comments-list">
        Comments
        <CommentCard
          article_id={article_id}
          setIsLoading={setIsLoading}
          comments={comments}
          setComments={setComments}
        />
      </div>
    </>
  );
}
export default Article;
