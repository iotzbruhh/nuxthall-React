import React from 'react'

import PropTypes from 'prop-types'

import './article-card.css'

const ArticleCard = (props) => {
  return (
    <div className="article-card-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="article-card-image"
      />
      <div className="article-card-container1">
        <h3 className="article-card-text Healine">{props.new_prop}</h3>
        <div className="article-card-container2">
          <div className="article-card-container3">
            <span className="article-card-text1">{props.description}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

ArticleCard.defaultProps = {
  new_prop: 'Portofino one of the best for remote working',
  image_src: '/playground_assets/1091948c6b80b65b9eef8c163f0ae42a-1400w.jpg',
  description: 'sample',
  image_alt: 'image',
}

ArticleCard.propTypes = {
  new_prop: PropTypes.string,
  image_src: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
}

export default ArticleCard
