// Components
import { Container, Row, Col } from "react-bootstrap";
// Data
import certificates from "../data/certificates.json";

const Certificates = () => {
  return (
    <Container id="certificates" as="section" className="p-3">
      <Row>
        {certificates.map(({ name, img }, idx) => (
          <Col key={idx} lg={6} className="p-2">
            <img
              src={img}
              alt={name}
              className="img-fluid"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Certificates;
