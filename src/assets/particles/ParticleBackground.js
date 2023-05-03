import React from "react";
import Particles from "particlesjs";

class ParticleBackground extends React.Component {
  componentDidMount() {
    Particles.init({
      selector: ".background",
      maxParticles: 150,
      color: "#ffffff",
      connectParticles: true,
      line_linked: {
        color: "#ffffff",
      },
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 80,
          },
        },
        {
          breakpoint: 480,
          options: {
            maxParticles: 50,
          },
        },
      ],
    });
  }

  render() {
    return <canvas className="background"></canvas>;
  }
}

export default ParticleBackground;
