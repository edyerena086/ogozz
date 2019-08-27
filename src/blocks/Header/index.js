// Import React
import React from "react"

// Import Sub-component
import ContactInfo from "./ContactInfo"
import NavBar from "./NavBar"

// Import Libraries
import { Section } from "rbx"

// Import Data
import { header } from "data/layout"

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <ContactInfo data={header.contact_info} />
        <NavBar data={header.navbar} />
      </header>
    )
  }
}