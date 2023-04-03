import { useParams } from 'react-router-dom'
import useCourseDetails from '../../hooks/useCourseDetails'
import { CourseDetailsPageContainer } from './styles'

function CourseDetailsPage() {
  const { id } = useParams()
  const { course } = useCourseDetails(id)

  return (
    <CourseDetailsPageContainer>
      <h2>Detalhes do Curso</h2>
      <img src={course?.imageUrl} alt={`Imagem do curso ${course?.name}`} />
      <p>
        <strong>Nome:</strong>
        <span>{course?.name}</span>
      </p>
      <p>
        <strong>Caterogia:</strong> <span>{course?.category}</span>
      </p>
      <p>
        <strong>Descrição:</strong> <span>{course?.description}</span>
      </p>
      <p>
        <strong>Duração:</strong> <span>{course?.duration}h</span>
      </p>
    </CourseDetailsPageContainer>
  )
}
export default CourseDetailsPage
