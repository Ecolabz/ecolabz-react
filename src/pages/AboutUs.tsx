import ContactSection from "../components/ContactSection";
import Frame from "../assets/images/Frame.png";
import TeamSection from "../components/TeamSection";

const AboutUs = () => {
  return (
    <>
      <div className="about-us-page mt-5">
        <div className="about-ecolabz">A little about us</div>

        <div className="content">
          <p className="text-lead">
            We subject every startup idea to rigorous data-driven processes, emphasizing swift execution, rapid elimination of non-viable ideas, and channeling our energy and resources towards ideas that demonstrate a strong product-market fit.
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
              We specialize in tailoring branding solutions that are meticulously crafted to be market-ready, comprehensive, and user-friendly, ensuring a seamless boost in business productivity.
            </p>
          </div>
        </div>
        <img src={Frame} alt="Divider Frame" className="w-100"  />
        <TeamSection />
      </div>
      <ContactSection />
    </>
  );
};

export default AboutUs;
