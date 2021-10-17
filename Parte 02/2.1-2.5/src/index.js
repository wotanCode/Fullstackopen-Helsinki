import React from "react";
import ReactDOM from "react-dom";

//Componente para el Header
const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

//Componente para el contenido.
const Content = (props) => {
  return (
    <>
      <Part parts={props.parts[0]} />
      <Part parts={props.parts[1]} />
      <Part parts={props.parts[2]} />
    </>
  );
};

//Part
const Part = (props) => {
  return (
    <>
      <p>
        {props.parts.name} {props.parts.exercises}
      </p>
    </>
  );
};

//Componente para el total
const Total = (props) => {
  //Se suma el contenido de ejericios con map
  const numejercicios = props.parts.map(total => total.exercises)
  console.log(numejercicios)
  //utilizamos reduce para sumar el arreglo
  const total = numejercicios.reduce((a,b) => a+b)
  console.log(total)

  return (
    <b>
      Number of exercises {total}
    </b>
  );
};

const Course = (props) => {
  return (
    <div>
      <Header course={props.course.name} />
      <Content parts={props.course.parts} />
      <Total parts={props.course.parts} />
    </div>
  );
};

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
    ],
  };

  return <Course course={course} />;
};

ReactDOM.render(<App />, document.getElementById("root"));
