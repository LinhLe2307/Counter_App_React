import Button from "./UI Components/Button";
import React, { Component } from "react";
import { useState } from "react";
import { render } from "@testing-library/react";

import Circle from "./Circle";
import classes from "./Circle.module.css";

// const Main = () => {
//   const [count, setCount] = useState(0);

//   const addFiveHandler = () => {
//     console.log("addFiveHandler");
//     setCount((prevCount) => prevCount + 5);
//   };
//   const addOneHandler = () => {
//     console.log("addOneHandler");
//     setCount((prevCount) => prevCount + 1);
//   };
//   const reset = () => {
//     console.log("Reset");
//     setCount((prevCount) => (prevCount = 0));
//   };
//   const removeFiveHandler = () => {
//     console.log("removeFiveHandler");
//     setCount((prevCount) => prevCount - 5);
//   };
//   const removeOneHandler = () => {
//     console.log("removeOneHandler");
//     setCount((prevCount) => prevCount - 1);
//   };

//   return (
//     <main>
//       <div className={count % 2 ? "circle even" : "circle odd"}>
//         <h1>{count}</h1>
//       </div>
//       <div>
//         <Button buttonName={"Add five"} onClick={addFiveHandler} />
//         <Button buttonName={"Add one"} onClick={addOneHandler} />
//         <Button buttonName={"Reset"} onClick={reset} />
//         <Button buttonName={"Remove one"} onClick={removeOneHandler} />
//         <Button buttonName={"Remove five"} onClick={removeFiveHandler} />
//       </div>
//     </main>
//   );
// };
class Main extends Component {
  state = {
    counter: 0,
    theme: "orange",
  };

  addFiveHandler = () => {
    // console.log("addFiveHandler");
    return this.setState({ counter: this.state.counter + 5 });
  };
  addOneHandler = () => {
    // console.log("addOneHandler");
    return this.setState({ counter: this.state.counter + 1 });
  };
  reset = () => {
    // console.log("Reset");
    return this.setState({ counter: 0 });
  };
  // removeFiveHandler = () => {
  //   // console.log("removeFiveHandler");
  //   return this.setState({ counter: this.state.counter - 5 });
  // };
  removeFiveHandler = () => {
    return this.state.counter >= 5
      ? this.setState({ counter: this.state.counter - 5 })
      : this.setState({ counter: this.state.counter });
  };
  removeOneHandler = () => {
    // console.log("removeOneHandler");
    return this.state.counter >= 1
      ? this.setState({ counter: this.state.counter - 1 })
      : this.setState({ counter: this.state.counter });
  };
  render() {
    // let classStyle = "circle";
    // if (this.state.counter % 2) {
    //   classStyle += " even";
    // } else {
    //   classStyle += " odd";
    // }
    let classStyle = this.state.counter % 2 ? classes.even : classes.odd;
    
    return (
      <main>
        {/* <div className={this.state.counter % 2 ? "circle even" : "circle odd"}> */}
        <Circle
          counter={this.state.counter}
          classStyle={classStyle}
        />
        <div>
          {/* <Button buttonName={"Add five"} onClick={this.addFiveHandler} />
          <Button buttonName={"Add one"} onClick={this.addOneHandler} />
          <Button buttonName={"Reset"} onClick={this.reset} />
          <Button buttonName={"Remove one"} onClick={this.removeFiveHandler} />
          <Button buttonName={"Remove five"} onClick={this.removeOneHandler} /> */}

          <Button value="Add five" click={this.addFiveHandler} />
          <Button click={this.addOneHandler}>Add one</Button>
          <Button click={this.reset}>Reset</Button>
          <Button click={this.removeOneHandler}>Remove one</Button>
          <Button click={this.removeFiveHandler}>Remove five</Button>
        </div>
      </main>
    );
  }
}

export default Main;
