import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../component/common/Header";
import queryString from "query-string";
import axios from "axios";

const BalancePage = () => {
  const { search } = useLocation();
  const { finuseno } = queryString.parse(search);
  const [balance, setbalance] = useState("");
  const [transactionList, settransactionList] = useState([]);

  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000);
    let transId = "M202112312U" + countnum; //이용기과번호 본인것 입력
    return transId;
  };

  useEffect(() => {
    getBalance();
    getBalanceList();
  }, []);

  const getBalance = () => {
    const option = {
      method: "GET",
      url: "/v2.0/account/balance/fin_num?",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      params: {
        bank_tran_id: genTransId(),
        fintech_use_num: finuseno,
        tran_dtime: "20210527151942",
      },
    };
    axios(option).then((response) => {
      setbalance(response.data.balance_amt);
    });
  };

  const getBalanceList = () => {
    const option = {
      method: "GET",
      url: "/v2.0/account/transaction_list/fin_num?",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      params: {
        bank_tran_id: genTransId(),
        fintech_use_num: finuseno,
        inquiry_type: "A",
        inquiry_base: "D",
        from_date: "20210526",
        to_date: "20210527",
        sort_order: "D",
        tran_dtime: "20210527170542",
      },
    };
    axios(option).then(({ data }) => {
      console.log(data);
      settransactionList(data.res_list);
    });
  };

  return (
    <>
      <Header title={"잔액 조회"}></Header>
      <p>현재 귀하의 잔액은 : {balance}원 입니다</p>
      <table>
        <thead>
          <tr>
            <td>순번</td>
            <td>내용</td>
            <td>금액</td>
            <td>잔액</td>
          </tr>
        </thead>
        <tbody>
          {transactionList.map((transaction, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{transaction.print_content}</td>
                <td>{transaction.tran_amt}</td>
                <td>{transaction.after_balance_amt}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default BalancePage;
