import React from 'react'

import PropTypes from 'prop-types'

import './secondary-button1.css'

const SecondaryButton1 = (props) => {
  return (
    <div className={`secondary-button1-container ${props.rootClassName} `}>
      <button className="secondary-button1-button button TextXS">
        {props.Gabung}
      </button>
    </div>
  )
}

SecondaryButton1.defaultProps = {
  rootClassName: '',
  Gabung: 'Gabung',
}

SecondaryButton1.propTypes = {
  rootClassName: PropTypes.string,
  Gabung: PropTypes.string,
}

export default SecondaryButton1
