// Import React
import React from "react"

// Import Sub-components
import Image from "./Image"

// Import Elements
import CallToAction from "elements/CallToAction"

// Import Libraries
import { Column, Content, Title } from "rbx"

export default class Service extends React.Component {
  render() {

    const { inverted = false, title, description, cta, image } = this.props

    return (
      <Column.Group className="home-service" gapless>
        { !inverted &&
          <>
            <Column className="service-description">
              <Content className="has-text-centered">

                <Title as="h3" className="has-text-left">{title}</Title>

                <p className="has-text-left">
                  {description}
                </p>

                <CallToAction 
                  to={cta.link}
                  title={cta.title}
                />
              </Content>
            </Column>
            <Column>
              <Image filename={image} />
            </Column>
          </>
        }

        {inverted &&
          <>
            <Column>
              <Image filename={image} />
            </Column>
            <Column className="service-description">
              <Content className="has-text-centered">

                <Title as="h3" className="has-text-left">{title}</Title>

                <p className="has-text-left">
                  {description}
                </p>

                <CallToAction
                  to={cta.link}
                  title={cta.title}
                />
              </Content>
            </Column>
          </>
        }
      </Column.Group>
    )
  }
}