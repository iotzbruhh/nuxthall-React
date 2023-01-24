import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SecondaryButton2 from '../components/secondary-button2'
import SecondaryButton from '../components/secondary-button'
import PrimaryButton from '../components/primary-button'
import Footer from '../components/footer'
import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - nuxthall</title>
        <meta
          name="description"
          content="Nuxhall adalah sebuah komunitas minecraft di indonesia. ayo bergabung sekarang!"
        />
        <meta property="og:title" content="Profile - nuxthall" />
        <meta
          property="og:description"
          content="Nuxhall adalah sebuah komunitas minecraft di indonesia. ayo bergabung sekarang!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5e92859f-df64-40c7-b1f6-c4e3c43c860a/cf359373-e70d-4d3a-808d-edb8afde6ce8?org_if_sml=1"
        />
      </Helmet>
      <div className="profile-image">
        <Header></Header>
        <img
          alt="image"
          src="/playground_assets/gray-vector.svg"
          className="profile-image1"
        />
        <div className="profile-bg"></div>
      </div>
      <div className="profile-container01">
        <div className="profile-container02">
          <img
            alt="image"
            src="/playground_assets/whatsapp%20image%202023-01-24%20at%208.18.28%20am1-200h.jpeg"
            className="profile-image2"
          />
        </div>
        <div className="profile-container03">
          <h3 className="profile-text">Info Minecraft Indonesia</h3>
          <div className="profile-container04">
            <span className="profile-text01 TextSM">mc_info_id</span>
          </div>
          <div className="profile-container05">
            <a
              href="https://instagram.com/mcinfo_id"
              target="_blank"
              rel="noreferrer noopener"
              className="profile-link"
            >
              <SecondaryButton2
                button="INSTAGRAM"
                rootClassName="secondary-button2-root-class-name"
                className="profile-component1"
              ></SecondaryButton2>
            </a>
          </div>
          <span className="profile-text02">
            <span className="profile-text03">
              Sebuah Profil Ig Yang Memberi Info Dan Update Tentang Minecraft.
            </span>
            <br></br>
          </span>
        </div>
        <div className="profile-container06"></div>
      </div>
      <div className="profile-container07">
        <div className="profile-container08">
          <img
            alt="image"
            src="/playground_assets/1091948c6b80b65b9eef8c163f0ae42a-200h.jpg"
            className="profile-image3"
          />
        </div>
        <div className="profile-container09">
          <h3 className="profile-text05">NutxHall Community</h3>
          <div className="profile-container10">
            <span className="profile-text06 TextSM">
              Minecraft Community &amp; SMP
            </span>
          </div>
          <div className="profile-container11">
            <a
              href="https://chat.whatsapp.com/FXpK9in3XebGkLTBtazree"
              target="_blank"
              rel="noreferrer noopener"
              className="profile-link1"
            >
              <SecondaryButton
                button="Whatsapp"
                className="profile-component2"
              ></SecondaryButton>
            </a>
            <a
              href="https://discord.gg/Rb5yyGSEVv"
              target="_blank"
              rel="noreferrer noopener"
              className="profile-link2"
            >
              <PrimaryButton
                button="Discord"
                className="profile-component3"
              ></PrimaryButton>
            </a>
          </div>
          <span className="profile-text07">
            <span className="profile-text08">
              Sebuah Grup Komunitas Minecraft Yang Di-accuire Oleh Nuxt
              Community Dan Kini Menjadi Satu. Gabung Sekarang!
            </span>
            <br></br>
          </span>
        </div>
        <div className="profile-container12"></div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Profile
