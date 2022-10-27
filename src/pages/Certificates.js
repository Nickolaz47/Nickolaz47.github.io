import { Container, Row } from "react-bootstrap";
import CertificateCard from "../components/CertificateCard";

const Certificates = ({ certificates }) => {
  return (
    <Container id="certificates" as="section">
      <Row>
        {certificates.map(({ name, img, hours, institution, year }, idx) => (
          <CertificateCard
            key={idx}
            name={name}
            img={img}
            hours={hours}
            institution={institution}
            year={year}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Certificates;
