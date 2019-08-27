// Import React
import React from "react"

// Import Libraries
import { Link } from "gatsby"

export default class CallToAction extends React.Component {
  render() {

    const { to, title } = this.props

    return (
      <Link to={to} className="call-to-action">{title}</Link>
    )
  }
}