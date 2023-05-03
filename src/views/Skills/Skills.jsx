import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faDatabase,
  faServer,
  faCloud,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faPython,
  faJsSquare,
  faReact,
  faNodeJs,
  faHtml5,
  faCss3Alt,
  faBootstrap,
  faUnity,
  faGit,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import "./Skills.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";

export default function Skills() {
const skillsData = [
  { id: 1, skill: "Python", icon: faPython },
  { id: 2, skill: "JavaScript", icon: faJsSquare },
  { id: 3, skill: "C#", icon: faCode },
  { id: 4, skill: "HTML5", icon: faHtml5 },
  { id: 5, skill: "CSS", icon: faCss3Alt },
  { id: 6, skill: "TypeScript", icon: faCode },
  { id: 7, skill: "React", icon: faReact },
  { id: 8, skill: "Bootstrap", icon: faBootstrap },
  { id: 9, skill: "Semantic UI", icon: faCode },
  { id: 10, skill: "jQuery", icon: faCode },
  { id: 11, skill: "AJAX", icon: faCode },
  { id: 12, skill: "Node.js", icon: faNodeJs },
  { id: 13, skill: "Express", icon: faServer },
  { id: 14, skill: "ASP.NET Core", icon: faCode },
  { id: 15, skill: "Flask", icon: faCode },
  { id: 16, skill: "Entity Framework Core", icon: faCode },
  { id: 17, skill: "MVC", icon: faCode },
  { id: 18, skill: "Jinja2", icon: faCode },
  { id: 19, skill: "MySQL", icon: faDatabase },
  { id: 20, skill: "MongoDB", icon: faDatabase },
  { id: 21, skill: "SQL", icon: faDatabase },
  { id: 22, skill: "AWS", icon: faCloud },
  { id: 23, skill: "Unity", icon: faUnity },
  { id: 24, skill: "Plastic", icon: faCode },
  { id: 25, skill: "VS Code", icon: faLaptopCode },
  { id: 26, skill: "Git", icon: faGit },
  { id: 27, skill: "Github", icon: faGithub },
];

  return (
    <section className="skills-section">
      <ScreenHeading title={"Skills"} subHeading={"Some of the skills I'v learned"}/>
      <ul className="skills-list">
        {skillsData.map((skill) => (
          <li key={skill.id} className="skill-item">
            <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
            {skill.skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
