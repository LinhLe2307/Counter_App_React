import React from "react";
import classes from "./Button.module.css";

// const Button = ({ buttonName, onClick }) => {
//   return (
//     <button className="btn" onClick={onClick}>
//       {buttonName}
//     </button>
//   );
// };
const Button = (props) => {
  return (
    <button className={`${classes.btn}`} onClick={props.click}>
      {props.value}
      {props.children}
    </button>
  );
};

export default Button;
