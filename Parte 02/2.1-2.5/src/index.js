import React from "react";
import ReactDOM from "react-dom";

//Componente para el Header
const Header = (props) => {
  return (
    <>
      <h2>{props.course}</h2>
    </>
  );
};

//Componente para el contenido.
const Content = (props) => {

  const partes = props.parts.map(contenido => contenido)
  console.log("el id de los props enviados es", partes)
  return (
    <>
    {
      partes.map((x, index) =>{
        return(
          <Part key={index} parts={props.parts[index]} />
          
        )
      })}
{/*Otro metodo para hacer esto seria:
      <Part parts={props.parts[0]} />
      <Part parts={props.parts[1]} />
*/}

{/* Metodo a traves de un short circuit */}
      {/* {props.parts[2] && (
      <Part parts={props.parts[2]} />)
*/}
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
  //console.log(numejercicios)
  //utilizamos reduce para sumar el arreglo
  const total = numejercicios.reduce((a,b) => a+b)
  //console.log(total)

  return (
    <b>
      Number of exercises {total}
    </b>
  );
};

const Course = (props) => {
  return (
    <div>
      <h1>Web development curriculum</h1>
      <Header course={props.course[0].name} />
      <Content parts={props.course[0].parts} />
      <Total parts={props.course[0].parts} />
      <Header course={props.course[1].name} />
      <Content parts={props.course[1].parts} />
      <Total parts={props.course[1].parts} />
    </div>
  );
};

const App = () => {
  const course = [
    {
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
  },
  {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },



  ]
  return (
  <Course course={course} />

  );
};

ReactDOM.render(<App />, document.getElementById("root"));
