import React from "react";
import { Carousel } from "react-bootstrap";

import treatmentRoom from "../../img/treatmentRoom.jpg";
import persnalizeCheckup from "../../img/persnalizeCheckup.jpg";
import displayOverCall from "../../img/displayOverCall.jpg";

export default function WelcomeScreen() {
  const slides = [
    {
      label: "Well equpied treatment room",
      img: treatmentRoom,
      imgAlt: "treatment room",
      description: "Well equpied treatment room will help for better treatemnt",
    },
    {
      label: "Persnalize checkp for all",
      img: persnalizeCheckup,
      imgAlt: "Persnalize checkp",
      description: "Persnalize checkp for all only on over platform",
    },
    {
      label: "Display all on mobile",
      img: displayOverCall,
      imgAlt: "display on mobile",
      description: "display on mobile so you can track your health",
    },
  ];

  return (
    <Carousel className="d-flex flex-row h-100 align-items-center">
      {slides.map((slides) => {
        return (
          <Carousel.Item>
            <div className="dashboard">
              <img
                className="d-block card w-100 h-100"
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
