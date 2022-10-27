// Components
import { Container, Row } from "react-bootstrap";
import CertificateCard from "../components/CertificateCard";
// Data
import certificates from "../data/certificates.json";

const Certificates = () => {
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
