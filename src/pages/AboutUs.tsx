import ContactSection from "../components/ContactSection";

const AboutUs = () => {
  return (
    <>
      <div className="about-us-page mt-5">
        <div className="about-ecolabz">A little about us</div>

        <div className="content">
          <p className="text-lead">
            The team at Ecolabz is made of entrepreneurs, designers, developers
            and business developers with different origins and backgrounds.
          </p>
          <p className="text-lead">
            We’re a team of creative business builders brought together by a
            passion for building innovative products based on novel ideas and
            turning them into profitable business solutions.
          </p>
          <p className="text-lead">
            We run each start-up idea through vigorous data-driven processes; we
            build fast, kill bad ideas faster, and focus our energy and
            resources on the ideas with a product market fit.
          </p>
        </div>
        <div className="divider"></div>

        <h3> What we do everyday</h3>

        <div className="row align-items-start justify-content-between">
          <div className="col-12 col-sm-6 col-lg-3 content" data-aos="fade-up">
            <h5>UI/UX design</h5>
            <p>
              Our designers bring world class expertise to the table. Making a
              bold statement from ideation to finished designs.
            </p>
          </div>

          <div
            className="col-12 col-sm-6 col-lg-3 content"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <h5>Web development</h5>
            <p>
              Our dedicated development team builds world class products and can
              improve existing tecnologies.
            </p>
          </div>
          <div
            className="col-12 col-sm-6 col-lg-3 content"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h5>Data science</h5>
            <p>
              Our AI powered systems offers instant analysis of hundreds of
              data, making meaning of them and helping you draw valuable
              deductions.
            </p>
          </div>

          <div
            className="col-12 col-sm-6 col-lg-3 content"
            data-aos="fade-up"
            data-aos-delay="900"
          >
            <h5>Branding</h5>
            <p>
              We create custom SaaS solutions that are market ready,
              comprehensive, and customer friendly for increased business
              productivity.
            </p>
          </div>
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default AboutUs;
