const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Part = (props) => {
  return (
    <p>
      {props.parts}: {props.exercises}
    </p>
  );
};

const Content = (props) => {
  return (
    <>
      <Part parts={props.parts[0].name} exercises={props.parts[0].exercises} />
      <Part parts={props.parts[1].name} exercises={props.parts[1].exercises} />
      <Part parts={props.parts[2].name} exercises={props.parts[2].exercises} />
    </>
  );
};

const Total = (props) => {
  return (
    <p>
      <strong>Number of exercises: </strong>
      {props.parts.reduce(
        (accumulator, currentValue) => accumulator + currentValue.exercises,
        0
      )}
    </p>
  );
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default App;
