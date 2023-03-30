import { forwardRef } from 'react'
import PropTypes from 'prop-types'
import './InputGroup.css'

const InputGroup = forwardRef(({ labelText, helperText, ...props }, ref) => {
  return (
    <div className="container">
      {labelText && (
        <label htmlFor="input" className="label">
          {labelText}
        </label>
      )}

      <input id="input" className="input" ref={ref} {...props} />

      {!!helperText && <span className="error">{helperText}</span>}
    </div>
  )
})

InputGroup.propTypes = {
  labelText: PropTypes.string,
  helperText: PropTypes.string
}

InputGroup.displayName = 'InputGroup'

export default InputGroup
