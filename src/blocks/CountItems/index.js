// Import React
import React from "react"

// Import Libraries
import { Section, Container, Column } from "rbx"

export default class CountItems extends React.Component {
  render() {
    return (
      <Section className="section-dark">
        <Container>
          <Column.Group>
            <Column></Column>
          </Column.Group>
        </Container>
      </Section>
    )
  }
}