import React from "react";
import queryString from "query-string";
import { useLocation } from "react-router-dom";
import Header from "../component/common/Header";
import styled from "styled-components";
var QRCode = require("qrcode.react");

const QRBlock = styled.div`
  margin: 1rem;
`;

const QrCodePage = () => {
  const { search } = useLocation();
  const { finuseno } = queryString.parse(search);
  return (
    <div>
      <Header title="QR 코드 생성"></Header>
      <QRBlock>
        <QRCode value={finuseno} />
        <p>{finuseno}</p>
      </QRBlock>
    </div>
  );
};

export default QrCodePage;
