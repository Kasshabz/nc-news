import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Header from "../Components/Header";
import ArticleList from "../Components/ArticleList";
import Article from "../Components/Article-Card";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ArticleList />} />
        <Route path="/article/:article_id" element={<Article />} />
      </Routes>
    </div>
  );
}

export default App;
