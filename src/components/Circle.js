import React from "react";
import classes from "./Circle.module.css";

const Circle = ({ counter, classStyle }) => {
  //   const [circleName, typeName] = classStyle.split(" ");
  return (
    // <div className={`${classes[circleName]} ${classes[typeName]}`}>
    <div className={`${classes.circle} ${classStyle}`}>
      <h1>{counter}</h1>
    </div>
  );
};

export default Circle;
