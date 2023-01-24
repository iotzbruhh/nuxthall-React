import React from 'react'

import PropTypes from 'prop-types'

import './secondary-button31.css'

const SecondaryButton31 = (props) => {
  return (
    <div className={`secondary-button31-container ${props.rootClassName} `}>
      <button className="secondary-button31-button button TextXS">
        {props.button}
      </button>
    </div>
  )
}

SecondaryButton31.defaultProps = {
  button: 'Button',
  rootClassName: '',
}

SecondaryButton31.propTypes = {
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SecondaryButton31
