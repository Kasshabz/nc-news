function ArticleList(props) {
  const { articles, setArticles } = props;
  return (
    <ul className="article-list">
      {articles.map((article) => {
        return (
          <li key={article.article_id} className="article-list-article">
            <img src={article.article_img_url} alt={article.title} />
            <p>{article.title}</p>
          </li>
        );
      })}
    </ul>
  );
}
export default ArticleList;
