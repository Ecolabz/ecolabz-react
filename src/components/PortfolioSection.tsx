import Nketsang from "../assets/images/nketsang.png";
import Ecojobz from "../assets/images/ecojobz.png";
import Haraka from "../assets/images/haraka.png";
import Bluuchip from "../assets/images/bluuchip.png";
import Fraqvest from "../assets/images/fraqvest.png";
import Ecotix from "../assets/images/ecotix.png";
import Ecotourz from "../assets/images/ecotourz.png";
import JobsInAfrica from "../assets/images/jobsinafrica.png";


const PortfolioSection = () => {
  const nketsangLink = "https://nketsang.africa";
  const ecojobzLink = "https://ecojobz.com";
  const harakaShopLink = "https://haraka.shop";
  const ecotixLink = "https://ecotix.africa";
  const bluuchipLink = "https://bluuchip.com";
  const fraqvestLink = "https://fraqvest.com";
  const ecotourzLink = "https://ecotourz.com";
  const jobsinafricaLink = "https://jobsinafrica.io";

  return (
    <>
      <div className="portfolio-section">
        <h1 data-aos="fade-up">Latest Projects We have Worked on</h1>
        <p className="subtitle-text" data-aos="fade-down" data-aos-delay="500">
          Explore a curated glimpse of our projects, showcasing the diversity and innovation that define our portfolio.
        </p>

        <div className="portfolio-container">
          <div className="row-item">
            <div className="project" data-aos="zoom-in">
              <img src={Nketsang} alt="Nketsang" />
              <div className="content">
                <h5>Nketsang</h5>
                <div className="brand">Investment Firm</div>
                <p>
                  Collaborate with us for more than just capital – gain a strategic ally invested in your success when you partner with us.
                </p>
                <a
                  className="link"
                  href={ecojobzLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Nketsang Ventures
                </a>
              </div>
            </div>
            <div className="project" data-aos="zoom-in" data-aos-delay="400">
              <img src={Haraka} alt="Haraka" />
              <div className="content">
                <h5>Haraka shop</h5>
                <div className="brand">E-commerce</div>
                <p>
                  Haraka is an online food and grocery order and delivery
                  platform that provides a quick, reliable and efficient way for
                  restaurants and businesses to sell, and customers to order
                  food and groceries using a mobile application.
                </p>
                <a
                  className="link"
                  href={harakaShopLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Haraka shop
                </a>
              </div>
            </div>
            <div className="project" data-aos="zoom-in" data-aos-delay="800">
              <img src={Bluuchip} alt="Bluuchip" />
              <div className="content">
                <h5>Bluuchip</h5>
                <div className="brand">Blockchain Payments</div>
                <p>
                  Bluuchip is a blockchain-based payment gateway that provides
                  businesses and merchants an easy way to accept payments
                  globally.
                </p>
                <a
                  className="link"
                  href={bluuchipLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Bluuchip
                </a>
              </div>
            </div>

            <div className="project" data-aos="zoom-in" data-aos-delay="1200">
              <img src={Fraqvest} alt="Fraqvest" />
              <div className="content">
                <h5>Fraqvest</h5>
                <div className="brand">Real Estate</div>
                <p>
                  With Fraqvest, experience the power of owning fractional shares in prime global real estate properties, allowing you to build and grow a prosperous portfolio filled with stable, appreciating assets.
                </p>
                <a
                  className="link"
                  href={ecotixLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Fraqvest
                </a>
              </div>
            </div>

            <div className="project" data-aos="zoom-in" data-aos-delay="2000">
              <img src={JobsInAfrica} alt="jobsinafrica" />
              <div className="content">
                <h5>Jobsinafrica</h5>
                <div className="brand">Freelance</div>
                <p>
                  Empower your business and career growth with Jobsinafrica, the
                  Fiverr for Africa with lower fees and more earning potential
                  for freelancers.
                </p>
                <a
                  className="link"
                  href={jobsinafricaLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Jobsinafrica
                </a>
              </div>
            </div>
          </div>

          <div className="divider"></div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSection;
