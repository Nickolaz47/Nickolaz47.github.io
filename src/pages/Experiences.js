// Components
import { Container, Row, Col } from "react-bootstrap";

const Experiences = () => {
  const calcTimeInMonths = (date1, date2) => {
    const time = new Date(date2) - new Date(date1);
    const timeInMonths = Math.round(time / 2629800000);
    return `${timeInMonths} meses`;
  };

  const convertDate = (date) => {
    if (date.length > 10) {
      return "atualmente";
    } else {
      const month = date.split("-")[1];
      const year = date.split("-")[0];

      return `${month}/${year}`;
    }
  };

  const experiences = [
    {
      role: "Desenvolvedor React",
      company: "Dosimagem",
      companyLink: "https://www.linkedin.com/company/dosimagem/",
      start: "2022-06-01",
      end: `${new Date(Date.now())}`,
      responsabilities: [
        "Manutenção do site na plataforma Wix",
        "Criação de um novo site em React",
      ],
    },
  ];

  return (
    <Container id="experiências" as="section" className="p-3">
      <Row className="justify-content-center align-items-center m-1">
        {experiences.map(
          (
            { role, company, companyLink, start, end, responsabilities },
            idx
          ) => (
            <Col key={idx} sm={8} className="border-top border-bottom">
              <h3 className="mt-1">
                <a
                  className="text-decoration-none text-light"
                  href={companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  role="button"
                >
                  {company}
                </a>
              </h3>
              <div className="my-2">
                <p className="fs-4 text-muted">{role}</p>
                <span className="fs-5">{`${convertDate(start)} - ${convertDate(
                  end
                )} (${calcTimeInMonths(start, end)})`}</span>
              </div>
              <div>
                <ul>
                  {responsabilities.map((responsability, idx) => (
                    <li key={idx} className="fs-6">
                      {responsability};
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
          )
        )}
      </Row>
    </Container>
  );
};

export default Experiences;
