import React from "react";
import Header from "../component/common/Header";
import AuthButton from "../component/common/AuthButton";

function MainPage() {
  const openUserAuthPage = () => {
    let tmpwindow = window.open("about:blank");
    let client_id = "5920a98d-412a-4890-baef-ad58879b4420";
    let authPageUrl = `https://testapi.openbanking.or.kr/oauth/2.0/authorize?response_type=code&client_id=${client_id}&redirect_uri=http://localhost:3000/authResult&scope=login inquiry transfer&state=12345678901234567890123456789012&auth_type=0`;
    tmpwindow.location.href = authPageUrl;
  };

  return (
    <div>
      <Header title="사용자 인증"></Header>
      <AuthButton title="인증받기" handleClick={openUserAuthPage}></AuthButton>
    </div>
  );
}

export default MainPage;
