import React from "react";
import { Carousel } from "react-bootstrap";

export default function WelcomeScreen() {
  const slides = [
    { label: 1, img: "#", imgAlt: "alternative", description: 10 },
    { label: 1, img: "#", imgAlt: "alternative", description: 10 },
    { label: 1, img: "#", imgAlt: "alternative", description: 10 },
  ];

  return (
    <Carousel>
      {slides.map((slides) => {
        return (
          <Carousel.Item>
            <div className="dashboard">
              <img
                className="d-block w-100 h-100"
                src={slides.img}
                alt={slides.imgAlt}
              />
              <Carousel.Caption>
                <h3>{slides.label}</h3>
                <p>{slides.description}</p>
              </Carousel.Caption>
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
