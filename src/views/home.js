import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import SecondaryButton3 from '../components/secondary-button3'
import SecondaryButton31 from '../components/secondary-button31'
import SecondaryButton1 from '../components/secondary-button1'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>nuxthall</title>
        <meta
          name="description"
          content="Nuxhall adalah sebuah komunitas minecraft di indonesia. ayo bergabung sekarang!"
        />
        <meta property="og:title" content="nuxthall" />
        <meta
          property="og:description"
          content="Nuxhall adalah sebuah komunitas minecraft di indonesia. ayo bergabung sekarang!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5e92859f-df64-40c7-b1f6-c4e3c43c860a/cf359373-e70d-4d3a-808d-edb8afde6ce8?org_if_sml=1"
        />
      </Helmet>
      <div className="home-hero">
        <div className="home-bg"></div>
        <Header></Header>
        <div className="home-container01">
          <img
            alt="image"
            src="/playground_assets/gray-vector.svg"
            className="home-image"
          />
          <img
            alt="image"
            src="/playground_assets/white-vector.svg"
            className="home-image1"
          />
          <h1 className="home-text">Welcome to Nutx Community!</h1>
          <div className="home-container02">
            <span className="home-text01">Kami menyambutmu !</span>
          </div>
          <div className="home-container03">
            <div className="home-container04">
              <Link to="/profile" className="home-navlink">
                <SecondaryButton3
                  button="Join"
                  rootClassName="secondary-button3-root-class-name"
                  className="home-component1"
                ></SecondaryButton3>
              </Link>
              <div className="home-container05">
                <Link to="/blog-post" className="home-navlink1">
                  <SecondaryButton31
                    button="Tentang"
                    rootClassName="secondary-button31-root-class-name"
                    className="home-component2"
                  ></SecondaryButton31>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section1">
        <div className="home-container06">
          <div className="home-container07">
            <h3 className="home-text02 Healine">Apa Ini?</h3>
            <span className="home-text03">
              NuxtHall adalah sebuah komunitas Dimana Disini adalah tempat para
              pemain minecraft berkumpul dan berbincang
            </span>
          </div>
          <div className="home-work-with-us">
            <div className="home-container08">
              <h3 className="home-text04">Apa Keuntunganya?</h3>
              <span className="home-text05">
                <span className="home-text06">
                  Pastinya dengan bergabung ke sebuah komunitas, Mempunyai
                  Tujuan nya masing masing, Nah ada keuntungannya nih join ke
                  Nutx Community
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-container09">
              <div className="home-container10">
                <h4 className="home-text08">
                  <br></br>
                  <br></br>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/white-vector.svg"
          className="home-image2"
        />
      </div>
      <div className="home-section2">
        <div className="home-growing-company-section">
          <img
            alt="image"
            src="/playground_assets/pngegg%20%5B1%5D-500h.png"
            className="home-image3"
          />
          <div className="home-container11">
            <h3 className="home-text11">1. Teman.</h3>
            <span className="home-text12">
              Kesepian? Hmm mugkin kamu bisa bergabung disini. Kalian bisa
              bertemu sesama player minecraft disini, Baik java atau bedrock.
            </span>
          </div>
        </div>
        <div className="home-growing-company-section1">
          <div className="home-container12">
            <h3 className="home-text13">2. Update</h3>
            <span className="home-text14">
              Update Minecraft dan informasi kami berikan kepada kalian. And
              yeah, Pastinya berguna banget dong &gt;_&lt;
            </span>
          </div>
          <img
            alt="image"
            src="/playground_assets/imagefinal-400h.webp"
            loading="lazy"
            className="home-image4"
          />
        </div>
        <div className="home-growing-company-section2">
          <img
            alt="image"
            src="/playground_assets/pngaaa.com-53049-600h.png"
            className="home-image5"
          />
          <div className="home-container13">
            <h3 className="home-text15">3. Nice Admin&amp;Member!</h3>
            <span className="home-text16">
              Pastinya dong, Kalian gamau komunitas yang toxic :)
            </span>
          </div>
        </div>
      </div>
      <div className="home-section3">
        <img
          alt="image"
          src="/playground_assets/gray-vector.svg"
          className="home-image6"
        />
        <div className="home-container14">
          <h3 className="home-text17">Gabung Sekarang!</h3>
        </div>
        <Link to="/profile" className="home-navlink2">
          <SecondaryButton1
            rootClassName="secondary-button1-root-class-name1"
            className="home-component3"
          ></SecondaryButton1>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Home
