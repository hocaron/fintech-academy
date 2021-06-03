import React, { useState } from "react";
import Header from "../component/common/Header";
import QrReaderReact from "react-web-qr-reader";
import Modal from "react-modal";
import ModalWithdraw from "../component/withdraw/ModalWithdraw";

const CustomStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    zIndex: "9",
  },
  content: {
    width: "95%",
    border: `0 solid black`,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    zIndex: "99999",
  },
};

const QrReader = () => {
  const [openModal, setopenModal] = useState(true);
  const [tofintechno, settofintechno] = useState("");
  //카메라 연결이 불가능한 경우 TURE 변경
  const delay = 500;
  const previewStyle = {
    height: 340,
    width: 414,
  };

  const handleScan = (result) => {
    if (result) {
      console.log(result.data);
      settofintechno(result.data);
      setopenModal(true);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  const closeModal = () => {
    setopenModal(false);
  };
  return (
    <div>
      <Header title={"QR 코드 읽기"}></Header>
      <QrReaderReact
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <Modal
        isOpen={openModal}
        style={CustomStyles}
        onRequestClose={closeModal}
        ariaHideApp={false}
      >
        <ModalWithdraw tofintechno={tofintechno}></ModalWithdraw>
      </Modal>
    </div>
  );
};

export default QrReader;
