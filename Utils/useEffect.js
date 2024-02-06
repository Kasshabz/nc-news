import { useState,useEffect } from "react";
const [articles, setArticles] = useState([]);
  useEffect(() => {
    articlesApi.get(`/articles`).then(({ data }) => {
      const responseArticles = data.article;
      setArticles(responseArticles);
    });
  })
  export default setArticles