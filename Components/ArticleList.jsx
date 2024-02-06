import { Link } from "react-router-dom";
import Article from "./Article-Card";
import { useState } from "react";

function ArticleList(props) {
  const { articles, setSelectedArticle } = props;

  const handleClick = (clickedArticle) => {
    setSelectedArticle(clickedArticle);
  };
  return (
    <>
      <ul className="article-list">
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="article-list-article">
              <img src={article.article_img_url} alt={article.title} />
              <p>Title:{article.title}</p>
              <p>Author: {article.author}</p>
              <p>Votes:{article.votes}</p>
              <p>Topic:{article.topic}</p>

              <Link to={`/article/${article.article_id}`}>
                <button
                  onClick={() => {
                    handleClick(article);
                  }}>
                  Read Article
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
export default ArticleList;
