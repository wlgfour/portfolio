import * as React from "react"

import Layout from '../components/Layout'
import Header from '../components/Header'
import Work from '../components/Work'
import About from '../components/About'
import Skills from '../components/Skills'
import Promotion from '../components/Promotion'
import Footer from '../components/Footer'
import Navbar from "../components/Navbar"
import Jumbotron from '../components/Jumbotron'

const IndexPage = () => {
  return (
    <Layout>
      <Jumbotron></Jumbotron>
      <Header></Header>
      <Work></Work>
      <About></About>
      <Skills></Skills>
      <Promotion></Promotion>
      <Footer></Footer>
    </Layout>
  )
}

export default IndexPage
