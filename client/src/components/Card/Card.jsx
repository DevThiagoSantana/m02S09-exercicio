import PropTypes from 'prop-types'

import { CardStyled } from './styles.js'

function Card({ children }) {
  return <CardStyled>{children}</CardStyled>
}

Card.propTypes = {
  children: PropTypes.node.isRequired
}

export default Card
