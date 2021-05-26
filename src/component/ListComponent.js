import React, { useState } from "react";
import ListItem from "./ListItem";

const ListComponent = () => {
  const [array, setarray] = useState([
    { name: "홍길동", age: "32", height: "184" },
    { name: "고길동", age: "42", height: "174" },
    { name: "둘리", age: "12", height: "174" },
  ]);
  return (
    <div>
      {array.map((user, index) => {
        return <ListItem user={user} key={index}></ListItem>;
      })}
    </div>
  );
};

export default ListComponent;
