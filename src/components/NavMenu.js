// Components
import { Container, Row, Col, Carousel, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// Icons
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
// CSS
import "./NavMenu.css";

const NavMenu = () => {
  const professions = [
    "Biomédico",
    "Bioinformata",
    "Desenvolvedor Python",
    "Desenvolvedor JavaScript",
    "Desenvolvedor Web Full Stack",
  ];

  const socialMediaLinks = [
    {
      icon: <FaWhatsapp size={28} />,
      link: "https://api.whatsapp.com/send?phone=5521981231412",
    },
    {
      icon: <FaLinkedin size={28} />,
      link: "https://www.linkedin.com/in/nicolas-da-matta-4b948b141/",
    },
    { icon: <FaGithub size={28} />, link: "https://github.com/Nickolaz47" },
  ];

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Experiências", link: "/experiences" },
    { name: "Habilidades", link: "/skills" },
    { name: "Certificados", link: "/certificates" },
  ];

  return (
    <>
      <Container id="personal-details" as="section">
        <Row>
          <div id="main-header" className="mt-2">
            <h2>Nicolas da Matta Freire Araujo</h2>
            <Carousel interval={3000} controls={false} indicators={false}>
              {professions.map((prof, idx) => (
                <Carousel.Item key={idx}>
                  <h4>{prof}</h4>
                </Carousel.Item>
              ))}
            </Carousel>
            <h5>Maricá, RJ</h5>
          </div>
        </Row>
        <Row id="second-header">
          {socialMediaLinks.map(({ icon, link }, idx) => (
            <Col key={idx} xs={4} className="text-center">
              <a
                key={link}
                className="btn btn-link btn-floating btn-lg text-light m-1"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                role="button"
                data-mdb-ripple-color="dark"
              >
                {icon}
              </a>
            </Col>
          ))}
        </Row>
      </Container>
      <nav id="navegation">
        <ul className="nav nav-pills nav-fill">
          {navLinks.map(({ name, link }, idx) => (
            <Nav.Item as="li" key={idx}>
              <NavLink key={Math.random()} className="nav-link" to={link} end>
                {name}
              </NavLink>
            </Nav.Item>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default NavMenu;
