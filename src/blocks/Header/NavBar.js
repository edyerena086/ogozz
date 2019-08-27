// Import React
import React from "react"

// Import Libraries
import { Link } from "gatsby"
import { Section, Container, Navbar as RbxNavbar } from "rbx"

export default class NavBar extends React.Component {
  render() {

    const { nav_links } = this.props.data

    return (
      <Section className="header-navbar">
        <Container>
          <RbxNavbar>
            <RbxNavbar.Brand></RbxNavbar.Brand>
            <RbxNavbar.Menu>
              <RbxNavbar.Segment align="end">
                {nav_links.map((item, index) => {
                  return (
                    <Link to={item.link} className="navbar-item" key={'nav-link-' + index}>{item.title}</Link>
                  )
                })}
              </RbxNavbar.Segment>
            </RbxNavbar.Menu>
          </RbxNavbar>
        </Container>
      </Section>
    )
  }
}