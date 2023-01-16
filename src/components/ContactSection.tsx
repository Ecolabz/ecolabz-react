import { useNavigate } from "react-router-dom";

const ContactSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="contact-section">
        <h1 data-aos="zoom-in">
          Working On Your Next Startup Idea? Interested in joining our team?
        </h1>
        <p className="subtitle-text" data-aos="fade-down" data-aos-delay="500">
          Drop us a message below and we’ll get back to you as soon as possible.
        </p>

        <div className="call-to-action">
          <div
            className="contact"
            onClick={() => {
              navigate("/contact");
              setTimeout(() => {
                const activeSect: any = document.querySelector(".contact-page");
                activeSect.scrollIntoView({
                  behavior: "smooth",
                });
              }, 100);
            }}
          >
            Contact us
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
