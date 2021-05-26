import React from "react";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid #ffcfcf;
  background: #dfdfdf;
  border-radius: 0.3rem;
`;

const ListItem = ({ user }) => {
  return (
    <Card>
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <h3>{user.height}</h3>
    </Card>
  );
};

export default ListItem;
