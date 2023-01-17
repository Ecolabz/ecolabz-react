import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <section className="page_404">
        <div className="notfound-container">
          <div className="heading ">404</div>

          <div className="content">
            <h3 className="h2">Looks like you're lost</h3>

            <p>The page you are looking for is not available!</p>

            <Link to="/" className="link_404">
              Go to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
