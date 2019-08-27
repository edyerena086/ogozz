// Import React
import React from "react"

// Import Libraries
import { Link } from "gatsby"
import { Section, Container, Content } from "rbx"
import { FaEnvelope } from "react-icons/fa"
import PropTypes from 'prop-types';

export default class ContactInfo extends React.Component {
  render() {

    const { email } = this.props.data

    return (
      <Section className="header-contact-info">
        <Container>
          <Content className="has-text-right">
            <ul>
              <li>
                <Link to="mailto:hello@ogozz.com"><FaEnvelope /> {email}</Link>
              </li>
            </ul>
          </Content>
        </Container>
      </Section>
    )
  }
}

ContactInfo.propTypes = {
  data: PropTypes.object.isRequired
}