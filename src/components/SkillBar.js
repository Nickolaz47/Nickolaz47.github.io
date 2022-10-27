import { Col } from "react-bootstrap";

const SkillBar = ({ skill }) => {
  let barColor;
  switch (skill.level) {
    case 100:
      barColor = "progress-bar bg-success";
      break;
    case 80:
      barColor = "progress-bar bg-info";
      break;
    case 60:
      barColor = "progress-bar";
      break;
    case 40:
      barColor = "progress-bar bg-warning";
      break;
    default:
      barColor = "progress-bar bg-danger";
      break;
  }

  return (
    <Col md={6}>
      <h5>{skill.name}</h5>
      <div className="progress">
        <div
          className={barColor}
          role="progressbar"
          style={{ width: `${skill.level}%` }}
          aria-valuenow={skill.level}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </Col>
  );
};

export default SkillBar;
