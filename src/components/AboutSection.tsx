import TailorMadeDev from "../assets/icons/tailor-made-dev.svg";
import CrossDeviceComp from "../assets/icons/cross-device-comp.svg";
import Testing from "../assets/icons/cutting-edge-tech.svg";


const AboutSection = () => {
  return (
    <>
      <div className="about-section">
        <h1 data-aos="fade-up">We Are Not Your Regular Startup Studio</h1>
        <p className="subtitle-text" data-aos="fade-up">
          We fuse creativity with technical prowess to rapidly test and bring innovative ideas to market, while efficiently eliminating concepts that don't resonate.
        </p>
        <div className="box-group" data-aos="fade-up">
          <div className="box">
            Swift Prototyping
          </div>
          <div className="box">
            Agile Ideation
          </div>
          <div className="box">
            Market Launch
          </div>
        </div>
        <div className="about-ecolabz">
          <div className="row align-items-start justify-content-between py-5">
            <div
              className="col-12 col-sm-6 col-lg-4 content"
              data-aos="zoom-in"
            >
              <img src={TailorMadeDev} alt="We Ideate It" />
              <h5>We Ideate It.</h5>
              <p>
                All exceptional products originate from an idea, and we discern significant opportunities by delving into formidable challenges. Innovation isn't exclusive to us entrepreneurs aspiring to shape a business concept.
              </p>
            </div>

            <div
              className="col-12 col-sm-6 col-lg-4 content"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <img src={CrossDeviceComp} alt="We Build It" />
              <h5>Prototyping and Validation.</h5>
              <p>
                Our ideas undergo swift validation through the creation of prototypes, ensuring an early assessment of product-market fit. If an idea doesn't resonate, we swiftly pivot to the next.
              </p>
            </div>
            <div
              className="col-12 col-sm-6 col-lg-4 content"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <img src={Testing} alt="We Scale The Product" />
              <h5>Product Scaling.</h5>
              <p>
              Upon meticulous vetting, we collaborate closely with a co-founder to launch and scale the idea into the market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
