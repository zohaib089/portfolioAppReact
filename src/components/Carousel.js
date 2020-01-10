import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap'
import Python from '../img/Python.jpg'
import ReactImg from '../img/React.jpeg'
import Django from '../img/django.png'
function ControlledCarousel() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
        setDirection(e.direction);
    };

    return (
        <Carousel style={{
            marginTop: "2rem",
            width: "70vw",
            marginLeft: ".6rem"
        }} activeIndex={index} direction={direction} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="img-fluid"
                    src={ReactImg}
                    alt="First slide"
                    style={{
                        height: "250px !import"
                    }}

                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{
                        height: "250px !import"
                    }}

                    className="img-fluid"
                    src={Python}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    style={{
                        height: "250px !import"
                    }}

                    className="img-fluid"
                    src={Django}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel