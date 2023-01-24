import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import Label from '../components/label'
import ArticleCard from '../components/article-card'
import Footer from '../components/footer'
import './blog-post.css'

const BlogPost = (props) => {
  return (
    <div className="blog-post-container">
      <Helmet>
        <title>BlogPost - nuxthall</title>
        <meta
          name="description"
          content="Nuxhall adalah sebuah komunitas minecraft di indonesia. ayo bergabung sekarang!"
        />
        <meta property="og:title" content="BlogPost - nuxthall" />
        <meta
          property="og:description"
          content="Nuxhall adalah sebuah komunitas minecraft di indonesia. ayo bergabung sekarang!"
        />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/5e92859f-df64-40c7-b1f6-c4e3c43c860a/cf359373-e70d-4d3a-808d-edb8afde6ce8?org_if_sml=1"
        />
      </Helmet>
      <div className="blog-post-hero">
        <div className="blog-post-fixed-header">
          <Header rootClassName="header-root-class-name"></Header>
        </div>
        <div className="blog-post-bg">
          <h1 className="blog-post-text Text2XL">TENTANG</h1>
        </div>
      </div>
      <div className="blog-post-post-details">
        <div className="blog-post-container1">
          <svg viewBox="0 0 1170.2857142857142 1024" className="blog-post-icon">
            <path d="M585.143 292.571h-219.429v219.429h219.429v-219.429zM658.286 658.286v73.143h-365.714v-73.143h365.714zM658.286 219.429v365.714h-365.714v-365.714h365.714zM1024 658.286v73.143h-292.571v-73.143h292.571zM1024 512v73.143h-292.571v-73.143h292.571zM1024 365.714v73.143h-292.571v-73.143h292.571zM1024 219.429v73.143h-292.571v-73.143h292.571zM146.286 768v-548.571h-73.143v548.571c0 20 16.571 36.571 36.571 36.571s36.571-16.571 36.571-36.571zM1097.143 768v-621.714h-877.714v621.714c0 12.571-2.286 25.143-6.286 36.571h847.429c20 0 36.571-16.571 36.571-36.571zM1170.286 73.143v694.857c0 60.571-49.143 109.714-109.714 109.714h-950.857c-60.571 0-109.714-49.143-109.714-109.714v-621.714h146.286v-73.143h1024z"></path>
          </svg>
        </div>
        <span className="blog-post-text001">
          <span>Info</span>
          <br></br>
        </span>
        <span className="blog-post-text004">
          <span>Seperti yang kalian ketahui, Nuxtcommunity adalah</span>
          <br></br>
          <span>Komunitas minecraft.</span>
          <br></br>
        </span>
      </div>
      <div className="blog-post-post-details1">
        <div className="blog-post-container2">
          <svg
            viewBox="0 0 1170.2857142857142 1024"
            className="blog-post-icon2"
          >
            <path d="M585.143 292.571h-219.429v219.429h219.429v-219.429zM658.286 658.286v73.143h-365.714v-73.143h365.714zM658.286 219.429v365.714h-365.714v-365.714h365.714zM1024 658.286v73.143h-292.571v-73.143h292.571zM1024 512v73.143h-292.571v-73.143h292.571zM1024 365.714v73.143h-292.571v-73.143h292.571zM1024 219.429v73.143h-292.571v-73.143h292.571zM146.286 768v-548.571h-73.143v548.571c0 20 16.571 36.571 36.571 36.571s36.571-16.571 36.571-36.571zM1097.143 768v-621.714h-877.714v621.714c0 12.571-2.286 25.143-6.286 36.571h847.429c20 0 36.571-16.571 36.571-36.571zM1170.286 73.143v694.857c0 60.571-49.143 109.714-109.714 109.714h-950.857c-60.571 0-109.714-49.143-109.714-109.714v-621.714h146.286v-73.143h1024z"></path>
          </svg>
        </div>
        <span className="blog-post-text009">
          <span>Rules</span>
          <br></br>
        </span>
        <span className="blog-post-text012">
          <span>
            {' '}
            1. Do not use any inappropriate profile picture/username ⚠️
          </span>
          <br></br>
          <span>× Disrespecting this rule will result in a kick.</span>
          <br></br>
          <span> doin this 2 time will result in permanent ban.</span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>2. Do not Spamming 💬</span>
          <br></br>
          <span>
            × Spamming chat in discord, will result in a warn then ban.
          </span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>3. Do not Bullying or disrespecting any server member 🎭</span>
          <br></br>
          <span>
            Bullying has detrimental effects on Members health, wellbeing and
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            learning. It can make Members feel lonely, unhappy and
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            frightened. This rule also applied to all ppl on the server.
          </span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>4. Do not make any Unnecessary Drama 🫂</span>
          <br></br>
          <span>
            Causing any drama like arguing and chaos isn&apos;t acceptable.
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>You may get warned or get kicked from this server.</span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>5. No Homophobia, racism etc. 🎭</span>
          <br></br>
          <span>
            Why would you do that? here some punishment,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>A ban! This is soo freaking cool isn&apos;t it?</span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>6. Do not send any suspicious links 🔗</span>
          <br></br>
          <span>• This include</span>
          <br></br>
          <span>› S3x Links</span>
          <br></br>
          <span>› IP grabber links</span>
          <br></br>
          <span>› P0rn links</span>
          <br></br>
          <span>etc</span>
          <br></br>
          <span>you&apos;ll get ban for this btw</span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>7. No NSFW Content 🔞</span>
          <br></br>
          <span>
            Some people won&apos;t like it
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>( including this rule&apos;s writer )</span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>8. No Death wishes or Dead treat 🪦</span>
          <br></br>
          <span>
            × Wishing death upon other users (including staff) will result to
            kick
          </span>
          <br></br>
          <span>
            × Treating death to other users will result in permanent ban +
            report
          </span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>9. Use each channel for its purposes 📸</span>
          <br></br>
          <span>Every channel that created here have it&apos;s purpose.</span>
          <br></br>
          <span> it&apos;s cool to have 3h ban because this rule</span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>10. Be cool, Kind. 😎</span>
          <br></br>
          <span>
            Treat all members with respect and express your
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>thoughts in a constructive manner.</span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>11. Common sense 🗣️</span>
          <br></br>
          <span>Use your brain, if you have one.</span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>12. Lag media 📸</span>
          <br></br>
          <span>
            Please don&apos;t send any pics or videos that makes the server
            lagging
          </span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>13. Ping 📌</span>
          <br></br>
          <span>Ping are limited to certain occasion such an raid.</span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>14. Impersonation 🗣️</span>
          <br></br>
          <span>
            This is really unacceptable ! Impersonating anyone IS VERY
            PROHIBITED !!
          </span>
          <br></br>
          <span>
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>15. No personal information ⚠️</span>
          <br></br>
          <span>Protect your own privacy and safety.</span>
          <br></br>
          <br></br>
          <span>This includes :</span>
          <br></br>
          <span>
            Age, full birthdate, place of birth, personal address,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            geolocation, school, phone number, email address,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>first name, first initial and last name, full name,</span>
          <br></br>
          <span> passport number, driver&apos;s license number,</span>
          <br></br>
          <span>
            {' '}
            IP address, login ID details,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            images or video footage containing means in which to identify,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            personal social media, social security number, credit/bank card
            numbers,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            biometric data,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            other identification numbers linked to one&apos;s identity and
            personal information,
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            or any other information that can be traced to one individual
          </span>
        </span>
      </div>
      <div className="blog-post-posts">
        <div className="blog-post-container3">
          <Label text="Founder Of NuxtCommunity" new_prop="Owner"></Label>
          <h3 className="blog-post-text151 Healine">NuxtCommunity</h3>
          <span className="blog-post-text152 TextXL">Siapa Foundernya?</span>
        </div>
        <ArticleCard
          new_prop="iotzbruhh"
          image_src="/playground_assets/1091948c6b80b65b9eef8c163f0ae42a-1400w.jpg"
          avatar_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
          description="Hai! Saya hanyalah seseorang yang tiba tiba mempunyai Ide membuat sebuah komunitas... Ya, saya awalnya cuma jadi staff di Hallsmp, Tapi karena ada masalah, saya Menjadi Owner Hallsmp ini."
        ></ArticleCard>
        <ArticleCard
          new_prop="Cherlynn"
          image_src="/playground_assets/e96fd4bf93c722f2544efd815b5fbc10-1400w.jpg"
          avatar_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
          description="Just Wildin. i dint doing anything. I working with guy above me"
        ></ArticleCard>
        <div className="blog-post-container4">
          <Label text="Founder Of Hallsmp"></Label>
          <h3 className="blog-post-text153 Healine">Hallsmp</h3>
          <span className="blog-post-text154 TextXL">
            Who Are The Founder Of Hallsmp?
          </span>
        </div>
        <ArticleCard
          name="Paul Smith"
          time="Drawn on 23 April"
          title="MateLabs mixes learning with IFTTT"
          new_prop="Cloud"
          image_src="/playground_assets/7ea0fb45a8edfe380ff42773fb3b2f11-1400w.jpg"
          avatar_src="/playground_assets/team1-200h.jpg"
          description="Founder Of HallSMP. Sekarang Tidak Meminpin Apapun."
        ></ArticleCard>
        <ArticleCard
          name="Paul Smith"
          time="Drawn on 23 April"
          title="MateLabs mixes learning with IFTTT"
          new_prop="Deryel"
          image_src="/playground_assets/e0yfcaivgaeic9i-1400w.png"
          avatar_src="/playground_assets/team1-200h.jpg"
          description="Founder Of HallSMP. Sekarang Tidak Meminpin Apapun."
        ></ArticleCard>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default BlogPost
