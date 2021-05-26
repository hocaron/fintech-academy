import React from "react";
import styled from "styled-components";

const AuthButtonStyled = styled.button`
  padding: 1rem;
  background: red;
  border-radius: 4rem;
`;

const AuthButton = ({ title, handleClick }) => {
  return (
    <>
      <AuthButtonStyled onClick={handleClick}>{title}</AuthButtonStyled>
    </>
  );
};

export default AuthButton;
