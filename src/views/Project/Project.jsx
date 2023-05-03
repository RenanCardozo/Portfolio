import React from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import './Project.css'
import { FaGithub } from "react-icons/fa";
import realTalk from './realTalk.png'
import mernSocialMedia from './mernSocialMedia.png'

function Project(props) {

    const iconStyle = {
      fontSize: "24px", // Change the font size to make the icon bigger
      marginRight: "8px", // Add some space between the icon and the text
    };

    const buttonStyle = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#24292e", // GitHub's color
      color: "white",
      borderRadius: "4px",
      padding: "8px 16px",
      textDecoration: "none",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      border: "none",
    };


  const projectsData = [
    {
      id: 1,
      title: "Gold Standard Estate",
      role: "Full-Stack Developer",
      description:
        "Developed a comprehensive real estate website for buying and selling homes, utilizing React, MongoDB, Bootstrap, and WebSockets.",
      github: "https://github.com/RenanCardozo/RealEstateMern",
      image: realTalk,
    },
    {
      id: 2,
      title: "Lions Den",
      role: "Full-Stack Developer",
      description:
        "A social website where users can create activities for others to join and follow each other using React, C#, Semantic UI, MySql, WebSockets, Mobx, and Formik.",
      github: "https://github.com/RenanCardozo/SocialMediaMernAndCSharp",
      image: mernSocialMedia,
    },
  ];

  return (
    <section className="projects-section" id={props.id || ""}>
      <ScreenHeading subHeading={"What I have built"} title={"Projects"} />
      <div className="projects-list">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className={`project-item ${index % 2 === 0 ? "left" : "right"}`}
          >
            <div className="project-image" >
              <img src={project.image} alt={project.title} loading="lazy" />
            </div>
            <div className="project-text">
              <h3 className="project-title">{project.title}</h3>
              <h4 className="project-role">{project.role}</h4>
              <p className="project-description">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                style={buttonStyle}
              >
                <FaGithub style={iconStyle} />
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;
