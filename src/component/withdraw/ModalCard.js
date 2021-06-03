import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import queryString from "query-string";

const ModalCardBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem;
  padding: 20px;
  border: 1px #112211 solid;
`;
const CardTitle = styled.div`
  font-size: 1rem;
  color: black;
`;
const FintechUseNo = styled.div`
  font-size: 0.7rem;
  margin-bottom: 30px;
`;

const WithDrawButton = styled.button`
  border: none;
  padding: 0.3rem;
  background: #2aa450;
  color: white;
  margin-top: 0.3rem;
`;

const ModalCard = ({ bankName, fintechUseNo, tofintechno }) => {
  const [amount, setamout] = useState("");
  const handleAmountChange = (e) => {
    const { value } = e.target;
    setamout(value);
  };
  const genTransId = () => {
    let countnum = Math.floor(Math.random() * 1000000000);
    let transId = "M202112312U" + countnum; //이용기과번호 본인것 입력
    return transId;
  };
  const handleClickWithdraw = () => {
    const option = {
      method: "POST",
      url: "/v2.0/transfer/withdraw/fin_num",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      data: JSON.stringify({
        bank_tran_id: genTransId(),
        cntr_account_type: "N",
        cntr_account_num: "100000000001",
        dps_print_content: "이용료",
        fintech_use_num: "120211231288932209610885",
        wd_print_content: "이용료",
        tran_amt: "1000",
        tran_dtime: "20210528120000",
        req_client_name: "호선우",
        req_client_fintech_use_num: "120211231288932209610885",
        req_client_num: "HONGGILDONG1234",
        transfer_purpose: "ST",
        recv_client_name: "홍길동",
        recv_client_bank_code: "097",
        recv_client_account_num: "100000000001",
      }),
    };
    console.log(fintechUseNo);
    axios(option).then((response) => {
      console.log(response);
      setamout(response.data.res_list);
      if (response.data.rsp_code === "A0000") {
        deposit();
      }
    });
  };

  const deposit = () => {
    const option = {
      method: "POST",
      url: "/v2.0/transfer/deposit/fin_num",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJNMjAyMTEyMzEyIiwic2NvcGUiOlsib29iIl0sImlzcyI6Imh0dHBzOi8vd3d3Lm9wZW5iYW5raW5nLm9yLmtyIiwiZXhwIjoxNjI5OTU4MDgxLCJqdGkiOiJkNTQ0YzMzNi00MzVjLTRkYTEtODUzMC0xZDQyMmFkNThhNmEifQ.FnTkqsMB5b8eSocPhaZTLxhxEFJQE4vRf489JPxx-V4",
      },
      data: {
        cntr_account_type: "N",
        cntr_account_num: "200000000001",
        wd_pass_phrase: "NONE",
        wd_print_content: "환불금액",
        name_check_option: "off",
        tran_dtime: "20200910101921",
        req_cnt: "1",
        req_list: [
          {
            tran_no: "1",
            bank_tran_id: genTransId(),
            fintech_use_num: "120211231288932209610885",
            print_content: "쇼핑몰환불",
            tran_amt: "500",
            req_client_name: "홍길동",
            req_client_fintech_use_num: "120211231288932209610885",
            req_client_num: "HONGGILDONG1234",
            transfer_purpose: "TR",
          },
        ],
      },
    };
    axios(option).then((response) => {
      console.log(response);
      if (response.data.rsp_code === "A0000") {
        alert("완료");
      }
    });
  };
  return (
    <ModalCardBlock>
      <CardTitle>{bankName}</CardTitle>
      <FintechUseNo>{fintechUseNo}</FintechUseNo>
      <p>{tofintechno}에 출금이체를 발생시킵니다.</p>
      <input onChange={handleAmountChange}></input>
      <WithDrawButton onClick={handleClickWithdraw}>결재하기</WithDrawButton>
    </ModalCardBlock>
  );
};

export default ModalCard;
