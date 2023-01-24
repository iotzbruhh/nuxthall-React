import React from 'react'

import PropTypes from 'prop-types'

import './secondary-button3.css'

const SecondaryButton3 = (props) => {
  return (
    <div className={`secondary-button3-container ${props.rootClassName} `}>
      <button className="secondary-button3-button TextXS button">
        {props.button}
      </button>
    </div>
  )
}

SecondaryButton3.defaultProps = {
  rootClassName: '',
  button: 'Button',
}

SecondaryButton3.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
}

export default SecondaryButton3
