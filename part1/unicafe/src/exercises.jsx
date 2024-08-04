import { useState } from "react";

// const Display = (props) => {
//   return <h1>{props.counter}</h1>;
// };

// const Button = (props) => {
//   return <button onClick={props.onClick}>{props.text}</button>;
// };

// const App = () => {
//   const [counter, setCounter] = useState(0);
//   console.log("rendering with counter value", counter);

//   const increaseByOne = () => {
//     console.log("increasing, value before", counter);
//     setCounter(counter + 1);
//   };

//   const decreaseByOne = () => {
//     console.log("decreasing, value before", counter);
//     setCounter(counter - 1);
//   };
//   const setToZero = () => {
//     console.log("resetting to zero, value before", counter);
//     setCounter(0);
//   };

//   return (
//     <div>
//       <Display counter={counter} />
//       <Button onClick={increaseByOne} text="Increase by one" />
//       <Button onClick={decreaseByOne} text="Decrease by one" />
//       <Button onClick={setToZero} text="Set to zero" />
//     </div>
//   );
// };

const History = (props) => {
  if (props.allClicks.length === 0) {
    return <div>the app is used by pressing the buttons</div>;
  }
  return <div>button press history: {props.allClicks.join(" ")}</div>;
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleLeftClick = () => {
    setAll(allClicks.concat("L"));
    const updatedLeft = left + 1;
    setLeft(updatedLeft);
  };

  const handleRightClick = () => {
    setAll(allClicks.concat("R"));
    const updatedRight = right + 1;
    setRight(updatedRight);
  };

  return (
    <>
      {left}
      <Button handleClick={handleLeftClick} text="left" />
      <Button handleClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
    </>
  );
};

export default App;
