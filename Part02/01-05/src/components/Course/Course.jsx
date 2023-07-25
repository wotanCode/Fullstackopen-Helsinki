import Content from "../Content"
import Header from "../Header"
import Total from "../Total"

const Course = ({ courses }) => {

  return (
    courses.map((course, i) => (
      <div key={`course-number-${i}`}>
        <Header title={course.name} />
        <Content content={course.parts} />
        <Total total={course.parts.map(t => (t.exercises))} />
      </div>
    ))
  )
}

export default Course
