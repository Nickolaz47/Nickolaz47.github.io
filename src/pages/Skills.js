// Components
import { Container, Row } from "react-bootstrap";
import SkillBar from "../components/SkillBar";
import SkillItem from "../components/SkillItem";

const Skills = () => {
  const softSkills = [
    "Resolução de problemas",
    "Proatividade",
    "Controle emocional",
    "Adaptabilidade",
    "Capacidade de trabalhar sobre pressão",
    "Organização",
    "Trabalho em equipe",
  ];

  const hardSkills = [
    { name: "Python", level: 80 },
    { name: "HTML", level: 60 },
    { name: "CSS", level: 60 },
    { name: "JavaScript", level: 60 },
    { name: "BootStrap", level: 60 },
    { name: "React", level: 60 },
    { name: "Word", level: 60 },
    { name: "Excel", level: 60 },
    { name: "PowerPoint", level: 60 },
    { name: "PostgreSQL", level: 40 },
    { name: "Machine Learning", level: 40 },
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
