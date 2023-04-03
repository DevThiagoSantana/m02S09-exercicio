import svg404 from '../../assets/404.svg'
import {
  NotFoundPageContainer,
  NotFoundPageContainerImg,
  NotFoundPageContainerH2
} from './styles'

function NotFoundPage() {
  return (
    <NotFoundPageContainer>
      <NotFoundPageContainerImg src={svg404} alt="404" />
      <NotFoundPageContainerH2>Página não encontrada</NotFoundPageContainerH2>
    </NotFoundPageContainer>
  )
}

export default NotFoundPage
