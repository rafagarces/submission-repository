import { useState } from "react";

const StatisticLine = (props) => {
  return (
    <tr>
      <td>
        <strong>{props.text}: </strong>
      </td>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>Please, provide feedback by clicking in one of the buttons</div>
    );
  }

  const totalVotes = props.allClicks.length;
  // Calculates totalScore using the values assigned to each feedback type (Good = 1, Neutral = 0, Bad = -1).
  const totalScore = props.good * 1 + props.neutral * 0 + props.bad * -1;
  // Calculates averageScore by dividing totalScore by totalVotes. If there are no votes, the average is 0.
  const averageScore = totalVotes === 0 ? 0 : totalScore / totalVotes;
  // Calculates averageGoodVotes by dividing the number of good votes by the total number of votes and multiplying by 100 to get the percentage. If there are no votes, the average is 0.
  const averageGoodVotes =
    totalVotes === 0 ? 0 : (props.good / totalVotes) * 100;

  return (
    <table>
      <tbody>
        <StatisticLine text="Total of votes" value={totalVotes} />
        <StatisticLine text="Average score" value={averageScore} />
        <StatisticLine text="Average good votes" value={averageGoodVotes} />
      </tbody>
    </table>
  );
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handleGoodClick = () => {
    setGood(good + 1);
    setAll(allClicks.concat("Good"));
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAll(allClicks.concat("Neutral"));
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(allClicks.concat("Bad"));
  };

  return (
    <>
      <>
        <h1>Give feedback</h1>
        <Button handleClick={handleGoodClick} text="Good"></Button>
        <Button handleClick={handleNeutralClick} text="Neutral"></Button>
        <Button handleClick={handleBadClick} text="Bad"></Button>
      </>
      <>
        <h1>Statistics</h1>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <Statistics
          allClicks={allClicks}
          good={good}
          neutral={neutral}
          bad={bad}
        />
      </>
    </>
  );
};

export default App;
