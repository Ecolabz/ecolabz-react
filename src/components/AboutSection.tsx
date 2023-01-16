import TailorMadeDev from "../assets/icons/tailor-made-dev.svg";
import CrossDeviceComp from "../assets/icons/cross-device-comp.svg";
import Testing from "../assets/icons/cutting-edge-tech.svg";


const AboutSection = () => {
  return (
    <>
      <div className="about-section">
        <h1 data-aos="fade-up">We Are Not Your Regular Startup Studio</h1>
        <p className="subtitle-text" data-aos="fade-up">
          We rapidly test new startup ideas by combining creativity with
          technical acumen to help business grow.
        </p>

        <div className="about-ecolabz">
          <div className="row align-items-start justify-content-between py-5">
            <div
              className="col-12 col-sm-6 col-lg-4 content"
              data-aos="zoom-in"
            >
              <img src={TailorMadeDev} alt="We Ideate It" />
              <h5>We Ideate It.</h5>
              <p>
                All great products begin with an idea as we identify the biggest
                opportunities by studying the greatest problems
              </p>
            </div>

            <div
              className="col-12 col-sm-6 col-lg-4 content"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <img src={CrossDeviceComp} alt="We Build It" />
              <h5>We Build It.</h5>
              <p>
                We validate our ideas by quickly building a prototype that tests
                the product-market fit early and if an idea fails, we move on to
                the next.
              </p>
            </div>
            <div
              className="col-12 col-sm-6 col-lg-4 content"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <img src={Testing} alt="We Scale The Product" />
              <h5>We Scale The Product.</h5>
              <p>
                Once an idea has been thoroughly vetted, we work closely with a
                co-founder to spin off the idea and bring it to market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
