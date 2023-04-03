import { Spinner } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import CourseFilter from '../../components/CourseFilter'
import CourseList from '../../components/CourseList'
import Button, { BUTTON_VARIANT } from '../../components/Button'
import useCourseList from '../../hooks/useCourseList'
import { useUserIsAdmin } from '../../hooks/useUserInfo'
import emptyState from '../../assets/empty.svg'

import { HomePageContainer, ListHeader } from './styles'

function HomePage() {
  const { courses, error, isLoading, fetchData } = useCourseList()
  const userIsAdmin = useUserIsAdmin()
  const navigate = useNavigate()

  return (
    <HomePageContainer>
      <ListHeader>
        <CourseFilter onFilter={fetchData} />
        {userIsAdmin && (
          <Button variant={BUTTON_VARIANT.SECONDARY} onClick={() => navigate('/course/register')}>Cadastrar Curso</Button>
        )}
      </ListHeader>

      {isLoading && <Spinner width={100} />}

      {!isLoading && !!error && <p>{error}</p>}

      {!isLoading && !error && !!courses.length && (
        <CourseList list={courses} />
      )}

      {!isLoading && !error && !courses.length && (
        <img
          height={500}
          src={emptyState}
          alt="Imagem de nenhum item encontrado"
        />
      )}
    </HomePageContainer>
  )
}

export default HomePage
