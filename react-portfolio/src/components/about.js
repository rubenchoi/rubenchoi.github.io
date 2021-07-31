import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {
  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
            <br />
            <Fade bottom>
              <a href='https://rubenchoi.github.io/metaverse.html' target='_blank' className="primary-btn">
                Metaverse
              </a><span> (in progress)</span>
            </Fade>
          </div>
          <div className="image-wrapper">
            <div style={{ width: '250px' }}>
              <img src={data.aboutImage} width="100%" alt="about" style={{ marginTop: '-50px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
