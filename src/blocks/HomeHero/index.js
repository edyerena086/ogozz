// Import React
import React from "react"

// Import Elements
import FluidImage from "elements/FluidImage"

// Import Libraries
import { Section, Container, Column } from "rbx"

export default class HomeHero extends React.Component {
  render() {
    return (
      <Section className="home-hero">
        <div className="background-wrapper">
          <FluidImage filename="home-hero-seo.jpg" />
        </div>

        <Container>
          <Column.Group>
            <Column>
              Hola Mundo
            </Column>
          </Column.Group>
        </Container>
      </Section>
    )
  }
}