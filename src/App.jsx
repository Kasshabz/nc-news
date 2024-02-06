import { useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "../Components/Header";
import articlesApi from "../Utils/bluedit-api";
import ArticleList from "../Components/ArticleList";
import Article from "../Components/Article-Card";
import { useEffect, isLoading } from "react";

function App() {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState({});
  const [isLoading, setIsLoading] = useState([]);
  const [comments, setComments] = useState({});
  useEffect(() => {
    articlesApi.get(`/articles`).then(({ data }) => {
      const responseArticles = data.article;
      setArticles(responseArticles);
      setIsLoading(false)
     
    });
  }, []);
  if(isLoading) return <p>Loading...</p>

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <ArticleList
              articles={articles}
              setArticles={setArticles}
              setSelectedArticle={setSelectedArticle}
            />
          }
        />
        <Route
          path="/article/:article_id"
          element={
            <Article
              articles={articles}
              setArticles={setArticles}
              selectedArticle={selectedArticle}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
