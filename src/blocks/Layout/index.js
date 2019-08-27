// Import React
import React from "react"

// Import Blocks
import Header from "blocks/Header"
import SEO from "blocks/SEO"

export default class Layout extends React.Component {
  render() {

    const { children } = this.props

    return (
      <>
        <SEO />
        <Header />
        {children}
      </>
    )
  }
}