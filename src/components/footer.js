import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container">
      <div className="footer-container01">
        <div className="footer-container02">
          <h1 className="footer-text">Ikuti Kami!</h1>
          <div className="footer-container03">
            <div className="footer-container04">
              <img
                alt={props.image_alt}
                src={props.image_src}
                className="footer-image"
              />
            </div>
            <a
              href="https://instagram.com/mcinfo_id"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link"
            >
              <div className="footer-container05">
                <img
                  alt={props.image_alt1}
                  src={props.image_src1}
                  className="footer-image1"
                />
              </div>
            </a>
            <a
              href="https://discord.gg/Rb5yyGSEVv"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link1"
            >
              <div className="footer-container06">
                <img
                  alt={props.image_alt2}
                  src={props.image_src2}
                  className="footer-image2"
                />
              </div>
            </a>
          </div>
        </div>
        <div className="footer-container07">
          <div className="footer-container08">
            <span className="footer-text1 TextXS">Lainnya</span>
            <a
              href="https://chat.whatsapp.com/FXpK9in3XebGkLTBtazree"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link2 TextSM"
            >
              Whatsapp Community
            </a>
            <a
              href="https://discord.gg/Rb5yyGSEVv"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link3 TextSM"
            >
              Discord
            </a>
            <a
              href="https://instagram.com/mcinfo_id"
              target="_blank"
              rel="noreferrer noopener"
              className="footer-link4 TextSM"
            >
              Instagram
            </a>
            <Link to="/" className="footer-navlink TextSM">
              Home
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-container09"></div>
      <span className="footer-text2">
        <span className="footer-text3 TextSM">
          Copyright © 2023-2024 NuxtCommunity&amp;NutxTeam
        </span>
        <br></br>
        <span>NutxCommunity Is Not Associated To Mojang AB</span>
        <br></br>
      </span>
    </div>
  )
}

Footer.defaultProps = {
  image_src2:
    '/playground_assets/concours-discord-cartes-voeux-fortnite-france-6-200h.png',
  image_src: '/playground_assets/whatsapp-logo-png-hd-2-200w.png',
  image_src1: '/playground_assets/instagram_logo_2016.svg-800h.png',
  image_alt1: 'image',
  image_alt2: 'image',
  image_alt: 'image',
}

Footer.propTypes = {
  image_src2: PropTypes.string,
  image_src: PropTypes.string,
  image_src1: PropTypes.string,
  image_alt1: PropTypes.string,
  image_alt2: PropTypes.string,
  image_alt: PropTypes.string,
}

export default Footer
