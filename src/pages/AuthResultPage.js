import React from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import axios from "axios";
import Header from "../component/common/Header";
import AuthButton from "../component/common/AuthButton";

const AuthResultPage = () => {
  const { search } = useLocation();
  const { code } = queryString.parse(search);

  const getAccessToken = () => {
    const option = {
      method: "POST",
      url: `/oauth/2.0/token`,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: queryString.stringify({
        code: code,
        client_id: "5920a98d-412a-4890-baef-ad58879b4420",
        client_secret: "4ad6edbd-7df7-4695-952a-7c6e027d450d",
        redirect_uri: "http://localhost:3000/authResult",
        grant_type: "authorization_code",
      }),
    };
    axios(option).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <>
      <Header title={"사용자 발급 토큰 확인"}></Header>
      <p>사용자가 발급받은 사용자 코드는</p>
      <p>{code}</p>
      <AuthButton title={"토큰받기"} handleClick={getAccessToken}></AuthButton>
    </>
  );
};

export default AuthResultPage;
