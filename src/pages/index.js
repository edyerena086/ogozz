// Import React
import React from "react"

// Import Blocks
import HomeHero from "blocks/HomeHero"
import Layout from "blocks/Layout"
import HomeServices from "blocks/HomeServices"
import HomeTestimonials from "blocks/HomeTestimonials"

// Data
import { services, customerTestimonials } from "data/home"

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <HomeHero />
        <HomeServices data={services} />
        <HomeTestimonials data={customerTestimonials} />
      </Layout>
    )
  }
}
