// Import React
import React from "react"

// Import Sub-components
import Service from "./Service"

// Import Elements
import SectionTitle from "elements/SectionTitle"

// Import Libraries
import { Section, Container, Column } from "rbx"

export default class HomeServices extends React.Component {
  render() {

    const { title, description, services } = this.props.data

    return (
      <Section>
        <Container>
          <Column.Group>
            <Column>
              <SectionTitle title={title} />

              <p className="has-text-centered">
                {description}
              </p>
            </Column>
          </Column.Group>

          {services.map((service, index) => {
            return (
              <Service 
                title={service.title}
                description={service.description}
                cta={service.cta}
                inverted={service.inverted}
                image={service.image}
                key={'home-service-item-' + index}
              />
            )
          })}
        </Container>
      </Section>
    )
  }
}