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

const skillsData = [
  { id: 1, skill: "Python", icon: faPython, category: "Language" },
  { id: 2, skill: "JavaScript", icon: faJsSquare, category: "Language" },
  { id: 3, skill: "C#", icon: faCode, category: "Language" },
  { id: 4, skill: "HTML5", icon: faHtml5, category: "Language" },
  { id: 5, skill: "CSS", icon: faCss3Alt, category: "Language" },
  { id: 6, skill: "TypeScript", icon: faCode, category: "Language" },
  { id: 7, skill: "React", icon: faReact, category: "Framework" },
  { id: 8, skill: "Bootstrap", icon: faBootstrap, category: "Framework" },
  { id: 9, skill: "Semantic UI", icon: faCode, category: "Framework" },
  { id: 10, skill: "jQuery", icon: faCode, category: "Framework" },
  { id: 11, skill: "AJAX", icon: faCode, category: "Framework" },
  { id: 12, skill: "Node.js", icon: faNodeJs, category: "Framework" },
  { id: 13, skill: "Express", icon: faServer, category: "Framework" },
  { id: 14, skill: "ASP.NET Core", icon: faCode, category: "Framework" },
  { id: 15, skill: "Flask", icon: faCode, category: "Framework" },
  {
    id: 16,
    skill: "Entity Framework Core",
    icon: faCode,
    category: "Framework",
  },
  { id: 17, skill: "MVC", icon: faCode, category: "Framework" },
  { id: 18, skill: "Jinja2", icon: faCode, category: "Framework" },
  { id: 19, skill: "MySQL", icon: faDatabase, category: "Database" },
  { id: 20, skill: "MongoDB", icon: faDatabase, category: "Database" },
  { id: 21, skill: "SQL", icon: faDatabase, category: "Language" },
  { id: 22, skill: "AWS", icon: faCloud, category: "Tool" },
  { id: 23, skill: "Unity", icon: faUnity, category: "Tool" },
  { id: 24, skill: "Plastic", icon: faCode, category: "Tool" },
  { id: 25, skill: "VS Code", icon: faLaptopCode, category: "Tool" },
  { id: 26, skill: "Git", icon: faGit, category: "Tool" },
  { id: 27, skill: "Github", icon: faGithub, category: "Tool" },
];

const categories = [
  { id: 1, title: "Languages", category: "Language" },
  { id: 2, title: "Frameworks / Libraries", category: "Framework" },
  { id: 3, title: "Databases", category: "Database" },
  { id: 6, title: "Tools", category: "Tool" },
];
  

export default function Skills() {
  const renderSkills = (category) => {
    return skillsData
      .filter((skill) => skill.category === category)
      .map((skill) => (
        <li key={skill.id} className="skill-item">
          <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
          {skill.skill}
        </li>
      ));
  };

  return (
    <section className="skills-section">
      <ScreenHeading
        title={"Skills"}
        subHeading={"Some of the skills I've learned"}
      />
      <div className="skills-categories">
        {categories.map((category) => (
          <div key={category.id} className="skills-category">
            <h3>{category.title}</h3>
            <ul className="skills-list">{renderSkills(category.category)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
