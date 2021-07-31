import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
// Components
import Header from "../components/Header"
import Work from "../components/Work"
import About from "../components/about"
import Skills from "../components/skills"
import Promotion from "../components/Promotion"
import Footer from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio Template" />
    <Header></Header>
    <Work></Work>
    <hr style={{ width: '70%', border: '1px solid #d5dfed', marginTop: '2em' }} />
    <About></About>
    <Skills></Skills>
    {/* <Promotion></Promotion> */}
    <Footer></Footer>
  </Layout>
)

export default IndexPage
