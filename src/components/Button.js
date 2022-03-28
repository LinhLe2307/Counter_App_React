import React from "react";

const Button = ({ buttonName, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {buttonName}
    </button>
  );
};

export default Button;
