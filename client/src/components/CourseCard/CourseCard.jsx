import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import clockImg from '../../assets/clock.png'
import Button, { BUTTON_VARIANT } from '../Button'
import {
  CourseCardContainer,
  CourseCardHeader,
  CourseCardDuration
} from './styles.js'
function CourseCard({ id, imageUrl, name, category, description, duration }) {
  const navigate = useNavigate()

  const handleNavigateDetails = () => {
    navigate(`/course/${id}`)
  }
  return (
    <CourseCardContainer>
      <CourseCardHeader>
        {imageUrl && (
          <img width={50} src={imageUrl} alt={`Imagem curso ${name}`} />
        )}
        <h3>{name}</h3>
      </CourseCardHeader>

      <CourseCardDuration>
        <img src={clockImg} alt="Ícone de relógio" />
        <p>{duration}h</p>
      </CourseCardDuration>

      <Button
        variant={BUTTON_VARIANT.SECONDARY_OUTLINED}
        onClick={handleNavigateDetails}
      >
        Ver detalhes
      </Button>
    </CourseCardContainer>
  )
}
CourseCard.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  imageUrl: PropTypes.string
}
export default CourseCard
