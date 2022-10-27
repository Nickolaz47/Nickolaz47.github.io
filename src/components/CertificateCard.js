import { Col } from "react-bootstrap";

const CertificateCard = ({ name, img, hours, institution, year }) => {
  return (
    <Col lg={6} style={{ margin: "5px auto" }}>
      <div className="card h-100">
        <img src={img} alt={name} />
        <div className="card-body" style={{ color: "black" }}>
          <h5 className="card-text">{name}</h5>
          <span className="card-text">
            <strong>Horas: </strong>
            {hours}
          </span>
          <br />
          <span className="card-text">
            <strong>Instituição: </strong>
            {institution}
          </span>
          <br />
          <span className="card-text">
            <strong>Ano: </strong>
            {year}
          </span>
          <br />
        </div>
      </div>
    </Col>
  );
};

export default CertificateCard;
