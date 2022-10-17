import React from "react";

import "./card.scss";

const Card = ({ icon: Icon, title, amount }:any) => {
  return (
    <div className="custom-card">
      <Icon />
      <h4>{title}</h4>
      <h3>{amount}</h3>
    </div>
  );
};

export default Card;
