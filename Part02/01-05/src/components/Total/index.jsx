const Total = (props) => {

  return (
    <>
      <p>Total of exercises {props.total.reduce((arr, elm) => (arr + elm))}</p>
    </>
  )
}

export default Total;
