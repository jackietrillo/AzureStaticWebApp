import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import skillData from "../Data/skillData";
import "../CSS/skills.css";

export default function Skills() {
  const [skills, setSkills] = React.useState(skillData);

  const skillElements = skills.map((skill) => (
    <div className="skill">
      <img src={skill.imageUrl}></img>
      <span>{skill.name}</span>
    </div>
  ));

  return (
    <>
      <Header />
      <main>
        {" "}
        <div className="skill-container">{skillElements} </div>
      </main>
      <Footer />
    </>
  );
}
