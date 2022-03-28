import Button from "./Button";
import React, { Component } from "react";
import { useState } from "react";
import { render } from "@testing-library/react";
// const Main = () => {
//   const [count, setCount] = useState(0);

//   const incrementFive = () => {
//     console.log("IncrementFive");
//     setCount((prevCount) => prevCount + 5);
//   };
//   const incrementOne = () => {
//     console.log("IncrementOne");
//     setCount((prevCount) => prevCount + 1);
//   };
//   const reset = () => {
//     console.log("Reset");
//     setCount((prevCount) => (prevCount = 0));
//   };
//   const decrementFive = () => {
//     console.log("decrementFive");
//     setCount((prevCount) => prevCount - 5);
//   };
//   const decrementOne = () => {
//     console.log("decrementOne");
//     setCount((prevCount) => prevCount - 1);
//   };

//   return (
//     <main>
//       <div className={count % 2 ? "circle even" : "circle odd"}>
//         <h1>{count}</h1>
//       </div>
//       <div>
//         <Button buttonName={"Add five"} onClick={incrementFive} />
//         <Button buttonName={"Add one"} onClick={incrementOne} />
//         <Button buttonName={"Reset"} onClick={reset} />
//         <Button buttonName={"Remove one"} onClick={decrementOne} />
//         <Button buttonName={"Remove five"} onClick={decrementFive} />
//       </div>
//     </main>
//   );
// };
class Main extends Component {
  state = {
    counter: 0,
    theme: "orange",
  };

  incrementFive = () => {
    console.log("IncrementFive");
    return this.setState({ counter: this.state.counter + 5 });
  };
  incrementOne = () => {
    console.log("IncrementOne");
    return this.setState({ counter: this.state.counter + 1 });
  };
  reset = () => {
    console.log("Reset");
    return this.setState({ counter: 0 });
  };
  decrementFive = () => {
    console.log("decrementFive");
    return this.setState({ counter: this.state.counter - 5 });
  };
  decrementOne = () => {
    console.log("decrementOne");
    return this.setState({ counter: this.state.counter - 1 });
  };
  render() {
    return (
      <main>
        <div className={this.state.counter % 2 ? "circle even" : "circle odd"}>
          <h1>
            {this.state.counter} {this.state.theme}
          </h1>
        </div>
        <div>
          <Button buttonName={"Add five"} onClick={this.incrementFive} />
          <Button buttonName={"Add one"} onClick={this.incrementOne} />
          <Button buttonName={"Reset"} onClick={this.reset} />
          <Button buttonName={"Remove one"} onClick={this.decrementFive} />
          <Button buttonName={"Remove five"} onClick={this.decrementOne} />
        </div>
      </main>
    );
  }
}

export default Main;
