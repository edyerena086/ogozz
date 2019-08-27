// Import React
import React from "react"

// Import Libraries
import { Card } from "rbx"
import { FaStar, FaStarHalf } from "react-icons/fa"

export default class TestimonialCard extends React.Component {

  renderStarsRate = number => {
    let starsToRender = [];

    for (let i = 1; i <= number; i++) {
      starsToRender.push(<FaStar key={'star-rating-' + i}/>)
    }

    return starsToRender
  }

  render() {

    const { stars, text, customer } = this.props.data
    console.log(stars) 

    return (
      <Card className="testimonial-card">
        <Card.Content>
          <p className="has-text-centered">
            {this.renderStarsRate(stars)}
          </p>

          <p className="has-text-centered">
            {text}
          </p>

          <h5 className="has-text-centered">
            {customer.name}

            <span>
              {customer.job}
            </span>
          </h5>
        </Card.Content>
      </Card>
    )
  }
}