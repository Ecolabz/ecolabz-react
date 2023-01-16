import Figma from "../assets/icons/figma.svg";
import Webflow from "../assets/icons/webflow.svg";
import Python from "../assets/icons/python.svg";
import ReactJs from "../assets/icons/reactjs.svg";
import NodeJs from "../assets/icons/nodejs.svg";
import RabbitMQ from "../assets/icons/rabbitMQ.svg";
import VueJs from "../assets/icons/vuejs.svg";
import PowerBi from "../assets/icons/powerbi.svg";
import Redis from "../assets/icons/redis.svg";
import MongoDB from "../assets/icons/mongodb.svg";


const TechStack = () => {
  return (
    <>
      <div className="tech-stack">
        <h1>Our technology stack</h1>
        <div className="tech-stack-container">
          <div className="item"
            data-aos="zoom-in"
          >
            <img src={Figma} alt="Figma" />
          </div>
          <div className="item"
            data-aos="zoom-in" data-aos-delay="200"
          >
            <img src={Webflow} alt="Webflow" />
          </div>
          <div className="item"
            data-aos="zoom-in" data-aos-delay="400"
          >
            <img src={Python} alt="Python" />
          </div>
          <div className="item"
            data-aos="zoom-in" data-aos-delay="600"
          >
            <img src={ReactJs} alt="ReactJs" />
          </div>
          <div className="item"
            data-aos="zoom-in" data-aos-delay="800"
          >
            <img src={NodeJs} alt="NodeJs" />
          </div>
          <div className="item"
            data-aos="zoom-in" data-aos-delay="1000"
          >
            <img src={RabbitMQ} alt="RabbitMQ" />
          </div>
          <div className="item"
            data-aos="zoom-in" data-aos-delay="1200"
          >
            <img src={VueJs} alt="VueJs" />
          </div>
          <div className="item"
            data-aos="zoom-in" data-aos-delay="1400"
          >
            <img src={PowerBi} alt="PowerBi" />
          </div>
          <div className="item"
            data-aos="zoom-in" data-aos-delay="1600"
          >
            <img src={Redis} alt="Redis" />
          </div>
          <div className="item"
            data-aos="zoom-in" data-aos-delay="1800"
          >
            <img src={MongoDB} alt="MongoDB" />
          </div>
        </div>
      </div>
    </>
  );
}

export default TechStack