import React, { useState } from "react";
import axios from "axios";

const AxiosComponent = () => {
  const getData = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?from=2021-04-26&sortBy=publishedAt&q=코로나&apiKey=980b0109ed0745b687a5fa93d73e2184&language=ko"
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={getData}>데이터 가져오기</button>
    </div>
  );
};

export default AxiosComponent;
