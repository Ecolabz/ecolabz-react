import FounderOneImage from "../assets/images/founder_one.jpg";
import FounderTwoImage from "../assets/images/founder_two.jpg";
import VenturePartnerImage from "../assets/images/venture_partner.jpg";
import ProductDesignerImage from "../assets/images/product_designer.jpg";
import FrontendDeveloper from "../assets/images/frontend_developer.jpg";
import Twitter from "../assets/icons/card-twitter.svg";
import LinkedIn from "../assets/icons/card-linkedin.svg";
import ContactSection from "../components/ContactSection";

const Team = () => {
  const joinUsLink = "https://ecojobz.com/employers/ecolabz";

  const coFounderOneTwitter = "https://twitter.com/sagedozzy";
  const coFounderOneLinkedIn =
    "https://www.linkedin.com/in/chukwudozie-onwughalu-398272234";

  const coFounderTwoTwitter = "https://twitter.com/ccz_eth";
  const coFounderTwoLinkedIn = "https://www.linkedin.com/in/charles-madueke";

  const venturePartnerTwitter = "https://twitter.com/investorweezy_";
  const venturePartnerLinkedIn =
    "https://www.linkedin.com/in/odira-onwughalu-354338259";

  const productDesignerTwitter = "https://twitter.com/faheezlawal";
  const productDesignerLinkedIn = "https://www.linkedin.com/in/faheezlawal";

  const frontendDeveloperTwitter = "https://twitter.com/obasekinoruwa";
  const frontendDeveloperLinkedIn =
    "https://www.linkedin.com/in/obaseki-noruwa-184a4020b/";

  return (
    <>
      <div className="team-page mt-5">
        <div className="our-team">Our team</div>
        <h2>Meet Our Team</h2>

        <div className="content">
          <p>
            We are a team of enthusiasts dedicated to helping people grow their
            business and get things done.
          </p>
        </div>

        <h3>This is us</h3>
        <div className="card-container">
          <div className="card">
            <img src={FounderOneImage} alt="" />
            <p className="name">Dozie Onwughalu</p>
            <p className="title">Co-Founder</p>
            <div className="socials">
              <a href={coFounderOneTwitter} target="_blank" rel="noreferrer">
                <img src={Twitter} alt="Twitter Icon" />
              </a>
              <a href={coFounderOneLinkedIn} target="_blank" rel="noreferrer">
                <img src={LinkedIn} alt="LinkedIn Icon" />
              </a>
            </div>
          </div>
          <div className="card">
            <img src={FounderTwoImage} alt="" />
            <p className="name">Charles Madueke</p>
            <p className="title">Co-Founder</p>
            <div className="socials">
              <a href={coFounderTwoTwitter} target="_blank" rel="noreferrer">
                <img src={Twitter} alt="Twitter Icon" />
              </a>
              <a href={coFounderTwoLinkedIn} target="_blank" rel="noreferrer">
                <img src={LinkedIn} alt="LinkedIn icon" />
              </a>
            </div>
          </div>
          <div className="card">
            <img src={VenturePartnerImage} alt="" />
            <p className="name">Odira Onwughalu</p>
            <p className="title">Venture Partner</p>
            <div className="socials">
              <a href={venturePartnerTwitter} target="_blank" rel="noreferrer">
                <img src={Twitter} alt="Twitter Icon" />
              </a>
              <a href={venturePartnerLinkedIn} target="_blank" rel="noreferrer">
                <img src={LinkedIn} alt="LinkedIn Icon" />
              </a>
            </div>
          </div>

          <div className="card">
            <img src={ProductDesignerImage} alt="" />
            <p className="name">Faheez Lawal</p>
            <p className="title">Product Designer</p>
            <div className="socials">
              <a href={productDesignerTwitter} target="_blank" rel="noreferrer">
                <img src={Twitter} alt="Twitter Icon" />
              </a>
              <a
                href={productDesignerLinkedIn}
                target="_blank"
                rel="noreferrer"
              >
                <img src={LinkedIn} alt="LinkedIn Icon" />
              </a>
            </div>
          </div>

          <div className="card">
            <img src={FrontendDeveloper} alt="" />
            <p className="name">Obaseki Noruwa</p>
            <p className="title">Frontend Developer</p>
            <div className="socials">
              <a
                href={frontendDeveloperTwitter}
                target="_blank"
                rel="noreferrer"
              >
                <img src={Twitter} alt="Twitter Icon" />
              </a>
              <a
                href={frontendDeveloperLinkedIn}
                target="_blank"
                rel="noreferrer"
              >
                <img src={LinkedIn} alt="LinkedIn Icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="call-to-action">
          <a
            href={joinUsLink}
            target="_blank"
            rel="noreferrer"
            className="join-us"
          >
            Join us
          </a>
        </div>
      </div>
      <ContactSection />
    </>
  );
};

export default Team;
