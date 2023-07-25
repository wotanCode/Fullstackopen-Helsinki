import Part from "../Part"

const Content = (props) => {

  return (
    <>
      {props.content.map((prop, i) => (
        <Part key={i} title={prop.name} exercise={prop.exercises} />
      ))}
    </>
  )
}

export default Content;
