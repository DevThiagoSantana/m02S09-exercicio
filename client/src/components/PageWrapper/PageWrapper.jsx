import PropTypes from 'prop-types'
import './PageWrapper.css'

function PageWrapper({ children }) {
  return <main className="pageWrapperContainer">{children}</main>
}

PageWrapper.propTypes = {
  children: PropTypes.node.isRequired
}

export default PageWrapper
