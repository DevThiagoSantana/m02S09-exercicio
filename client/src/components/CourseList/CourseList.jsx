import PropTypes from 'prop-types'
import CourseCard from '../CourseCard'
import { CourseListContainer } from './styles'

function CourseList({ list }) {
  return (
    <CourseListContainer>
      {list.map((course) => (
        <li key={course.id}>
          <CourseCard
            id={course.id}
            imageUrl={course.imageUrl}
            name={course.name}
            category={course.category}
            description={course.description}
            duration={course.duration}
          />
        </li>
      ))}
    </CourseListContainer>
  )
}

CourseList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      duration: PropTypes.number.isRequired,
      imageUrl: PropTypes.string
    })
  )
}

CourseList.defaultProps = {
  list: []
}

export default CourseList
