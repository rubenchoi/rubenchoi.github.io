import React from "react"
import Fade from "react-reveal/Fade"

const Header = () => {
  return (
    <div className="section" id="home">
      <div className="container">
        <div className="header-wrapper">
          <Fade bottom cascade>
            <div className="heading-wrapper">
              <h1>Ruben Choi</h1>
            </div>
          </Fade>
          <Fade bottom>
            <p>Music, Writing, 3D & IT</p>
          </Fade>
          {/* 
          <Fade bottom>
            <a href='https://rubenchoi.github.io/metaverse.html' target='_blank' className="primary-btn">
              Metaverse
            </a>
          </Fade> 
          */}
        </div>
      </div>
    </div>
  )
}

export default Header
