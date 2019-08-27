// Import React
import React from "react"

// Import Elements
import Slider from "react-slick"
import SectionTitle from "elements/SectionTitle"
import TestimonialCard from "elements/TestimonialCard"

// Import Libraries
import { Section, Container, Column } from "rbx"

export default class HomeTestimonials extends React.Component {
  render() {

    const { data } = this.props

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 8000,
      slidesToShow: 1,
      slidesToScroll: 1
    }

    return (
      <Section className="section-dark">
        <Container>
          <Column.Group vcentered>
            <Column size={4}>
              <SectionTitle 
                title={data.title}
                inverted={true}
              />
            </Column>

            <Column size={8}>

              <Slider {...settings}>
                {data.testimonials.map((testimonial, index) => {
                  return (
                    <TestimonialCard 
                      key={"testimonial-" + index}
                      data={testimonial}
                    />
                  )
                })}
              </Slider>
            </Column>
          </Column.Group>
        </Container>
      </Section>
    )
  }
}