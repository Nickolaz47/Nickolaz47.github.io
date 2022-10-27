// Components
import { Container, Row } from "react-bootstrap";
import SkillBar from "../components/SkillBar";
import SkillItem from "../components/SkillItem";

const Skills = () => {
  const softSkills = [
    "Resolução de problemas",
    "Adaptabilidade",
    "Organização",
    "Proatividade",
    "Capacidade de trabalhar sobre pressão",
    "Trabalho em equipe",
    "Controle emocional",
  ];

  const hardSkills = [
    { name: "Linux", level: 60 },
    { name: "Genômica", level: 80 },
    { name: "Python", level: 80 },
    { name: "Machine Learning", level: 40 },
    { name: "HTML", level: 80 },
    { name: "CSS", level: 60 },
    { name: "BootStrap", level: 80 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 80 },
    { name: "NodeJS", level: 60 },
    { name: "Git", level: 60 },
    { name: "GitHub", level: 60 },
    { name: "PostgreSQL", level: 40 },
    { name: "Word", level: 60 },
    { name: "Excel", level: 60 },
    { name: "PowerPoint", level: 60 },
  ];

  return (
    <Container id="skills" as="section" className="p-3">
      <Container id="soft-skills" as="section">
        <h3>Soft Skills</h3>
        <Row id="skill-items">
          {softSkills.map((skill, idx) => (
            <SkillItem key={idx} skill={skill} />
          ))}
        </Row>
      </Container>
      <Container id="hard-skills" as="section">
        <h3>Hard Skills</h3>
        <Row id="skill-bars">
          {hardSkills.map((skill, idx) => (
            <SkillBar key={idx} skill={skill} />
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default Skills;
