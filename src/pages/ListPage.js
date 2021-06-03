import React, { useState, useEffect } from "react";
import Header from "../component/common/Header";
import axios from "axios";
import Card from "../component/list/Card";

const ListPage = () => {
  const [accountList, setaccountList] = useState([]);

  useEffect(() => {
    getAccountList();
  }, []);

  const getAccountList = () => {
    const option = {
      method: "GET",
      url: "/v2.0/user/me?",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      params: {
        user_seq_no: `${localStorage.getItem("userseqnum")}`,
      },
    };
    axios(option).then((response) => {
      console.log(response);
      setaccountList(response.data.res_list);
    });
  };

  return (
    <>
      <Header title="계좌 목록 확인"></Header>
      {accountList.map((account) => {
        return (
          <Card
            key={account.fintech_use_num}
            bankName={account.bank_name}
            fintechUseNo={account.fintech_use_num}
          ></Card>
        );
      })}
    </>
  );
};

export default ListPage;
