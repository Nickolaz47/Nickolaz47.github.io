import {Container, Row} from 'react-bootstrap'
import SkillBar from '../components/SkillBar'
import SkillItem from '../components/SkillItem'

const Skills = ({softSkills, hardSkills}) => {
    return (      
        <>
            <Container id="soft-skills" as="section">
                <h3>Soft Skills</h3>
                <Row id="skill-items">
                    {softSkills.map((skill, idx) => (
                        <SkillItem key={idx} skill={skill}/>
                    ))}
                </Row>                
            </Container>
            <Container id="hard-skills" as="section">
                <h3>Hard Skills</h3>
                <Row id="skill-bars">
                    {hardSkills.map((skill, idx) => (
                        <SkillBar key={idx} skill={skill}/>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Skills