const Total = (props) => {

  return (
    <>
      <p>Number of exercises {props.total.reduce((arr, elm) => (arr + elm))}</p>
    </>
  )
}

export default Total;
