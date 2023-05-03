import React,{useEffect} from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from  '../../utilities/Animations';
import './AboutMe.css'
import Skills from '../Skills/Skills';

export default function AboutMe(props) {
  
  let fadeInScreenHandler =(screen) => {
    if(screen.fadeScreen !== props.id)
    return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS ={
    description: "Full Stack Web Developer with background in MERN, Python, C#, REACT, with a strong ability to work with large scale projects and build applications with utmost efficiency.",
    highlights:{
      bullets : [
        "Full Stack Web Developer ( Front-end & Back-end )",
        "React Developer",
        "Python Developer",
        "C# Developer",
        "MERN Developer",
        "Building REST API"
      ],
      heading: "Here are a few highlights:"
    }
  }
  const renderHighlights = () => {
    return (
      SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
        <div className='highlight' key={i}>
          <div className='highlight-blob'></div>
          <span>{value}</span>
        </div>
      ))
    )
  }

  return (
    <div className="about-me-container screen-container" id={props.id || ""}>
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlights()}
            </div>
            <div className="about-me-options">
              <a href="renanCardozo.pdf" download="renancardozo.pdf">
                <button className="btn highlighted-btn">Get Resume</button>
              </a>
            </div>
          </div>
          <div className="about-me-profile"></div>
        </div>
      </div>
      <Skills />
    </div>
  );
}
