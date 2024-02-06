import { useState } from "react";
import "./App.css";
import Header from "../Components/Header";
import articlesApi from "../Utils/bluedit-api";
import ArticleList from "../Components/ArticleList";
import { useEffect } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    articlesApi.get(`/articles`).then(({ data }) => {
      const responseArticles = data.article;
      setArticles(responseArticles);
    });
  })
  
  return (
    <div>
      <Header />
      <ArticleList articles={articles} setArticles={setArticles} />
    </div>
  );
}

export default App;
