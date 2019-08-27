// Import React
import React from "react"

// Import Sub-components
import Image from "./Image"

// Import Libraries
import { Title } from "rbx"

export default class SectionTitle extends React.Component {
  render() {

    const { title, inverted = false } = this.props

    return (
      <>
        {!inverted &&
          <Title as="h2" className="section-title has-text-centered">
            {title}<br/>
            <Image />
          </Title>
        }

        {inverted &&
          <Title as="h2" className="section-title-inverted has-text-centered">
            {title}
          </Title>
        }
     </>
    )
  }
}