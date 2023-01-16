import Ecojobz from "../assets/images/ecojobz.png";
import Haraka from "../assets/images/haraka.png";
import Bluuchip from "../assets/images/bluuchip.png";
import Ecotix from "../assets/images/ecotix.png";
import Ecotourz from "../assets/images/ecotourz.png";


const PortfolioSection = () => {
  const ecojobzLink = "https://ecojobz.com";
  const harakaShopLink = "https://haraka.shop";
  const ecotixLink = "https://ecotix.africa";
  const bluuchipLink = "https://bluuchip.com";
  const ecotourzLink = "https://ecotourz.com";

  return (
    <>
      <div className="portfolio-section">
        <h1 data-aos="fade-up">Recent projects that we just launched</h1>
        <p className="subtitle-text" data-aos="fade-down" data-aos-delay="500">
          Here's a small selection of the most recent projects we've launched.
        </p>

        <div className="portfolio-container">
          <div className="row-item">
            <div className="project" data-aos="zoom-in">
              <img src={Ecojobz} alt="Ecojobz" />
              <div className="content">
                <h5>Ecojobz</h5>
                <div className="brand">Job Board</div>
                <p>
                  Get applications from the best freelancers and creatives
                  worldwide when you list and feature your jobs on Ecojobz.
                </p>
                <a
                  className="link"
                  href={ecojobzLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Ecojobz
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
              <img src={Ecotix} alt="Ecotix" />
              <div className="content">
                <h5>Ecotix</h5>
                <div className="brand">Event Ticketing</div>
                <p>
                  Create and sell your event tickets from the comfort of your
                  phone.
                </p>
                <a
                  className="link"
                  href={ecotixLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Ecotix
                </a>
              </div>
            </div>

            <div className="project" data-aos="zoom-in" data-aos-delay="1600">
              <img src={Ecotourz} alt="Ecotourz" />
              <div className="content">
                <h5>Ecotourz</h5>
                <div className="brand">Travel & Tourism</div>
                <p>
                  Technology Driven Online Travel Company Curating & Crafting
                  Itineraries Worth Your Time, Taste & Budget.
                </p>
                <a
                  className="link"
                  href={ecotourzLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Ecotourz
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
