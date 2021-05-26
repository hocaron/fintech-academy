import axios from "axios";
import React, { useState } from "react";
import Header from "../component/common/Header";
import NewsList from "../component/news/NewsList";
import Search from "../component/news/Search";

const NewsPage = () => {
  const [news, setnews] = useState([]);
  const [searchText, setSearchText] = useState([]);

  const handleChangeInput = (e) => {
    const { value, name } = e.target;
    setSearchText(value);
  };
  const handleClickSearchButton = () => {
    let newsUrl = `https://newsapi.org/v2/everything?q=${searchText} &from=2021-04-26&sortBy=publishedAt&apiKey=7c40ccfbfe6a49879c72667ee46b8d39&language=ko`;
    axios.get(newsUrl).then((response) => {
      let resultNewsList = response.data.articles;
      setnews(resultNewsList);
    });
  };
  return (
    <div>
      <Header title="뉴스검색"></Header>
      {/* Header 컴포넌트 작성 */}
      <Search
        handleChangeSearchInput={handleChangeInput}
        handleClickSearchButton={handleClickSearchButton}
      ></Search>
      <NewsList news={news}></NewsList>
    </div>
  );
};

export default NewsPage;
