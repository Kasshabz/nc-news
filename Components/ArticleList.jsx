import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import articlesApi from "../Utils/bluedit-api";

function ArticleList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    articlesApi
      .get(`/articles`)
      .then(({ data }) => {
        const responseArticles = data.article;
        setArticles(responseArticles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  if (isLoading) return <p>Loading...</p>;

  const handleClick = (clickedArticle) => {
    return clickedArticle;
  };
  return (
    <>
      <div className="article-list">
        {articles.map((article) => {
          return (
            <div key={article.article_id} className="article-list-article">
              <img src={article.article_img_url} alt={article.title} />
              <p> Title:{article.title}</p>
              <p>Author: {article.author}</p>
              <p> Votes:{article.votes}</p>
              <p> Topic:{article.topic}</p>
              <Link to={`/article/${article.article_id}`}>
                <button
                  onClick={() => {
                    handleClick(article);
                  }}>
                  Read Article
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
export default ArticleList;
