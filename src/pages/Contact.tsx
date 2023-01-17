import { useEffect, useState } from "react";
import { serverTimestamp, addDoc } from "firebase/firestore";

import { colRef } from "../App";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";

const Contact = () => {
  const [detail, setDetail] = useState({
    fullname: "",
    email: "",
    phone_no: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const clearFields = () => {
    setDetail({
      fullname: "",
      email: "",
      phone_no: "",
      message: "",
    });
  };

  useEffect(() => {
    if (success) {
      clearFields();
    }
  }, [success]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;

    setDetail((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    // Get Collection Data
    addDoc(colRef, {
      name: detail.fullname,
      email: detail.email,
      phone_no: detail.phone_no,
      message: detail.message,
      createdAt: serverTimestamp(),
    })
      .then(() => {
        toast.info("Message sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        setSuccess(true);
      })
      .catch((err) => {
        throw Error(err.Message);
      });
  };

  return (
    <>
      <ToastContainer />
      <div className="contact-page">
        <div className="row align-items-start justify-content-between">
          <div className="col-lg-6">
            <div className="contact-us">Contact us</div>
            <h2>Send us an Email Today Don’t be shy</h2>
            <div className="box-content">
              <p className="text-lead">
                We’re here to help and happy to answer any questions
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="login">
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control-input "
                    placeholder="(First name, Last name)"
                    required
                    id="name"
                    value={detail.fullname}
                    name="fullname"
                    onChange={handleChange}
                  />
                </div>

                <label htmlFor="email" className="mt-4">
                  Email
                </label>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control-input"
                    placeholder="Enter your email here..."
                    required
                    id="email"
                    value={detail.email}
                    name="email"
                    onChange={handleChange}
                  />
                </div>

                <label htmlFor="phone_number" className="mt-4">
                  Phone No
                </label>
                <div className="form-group">
                  <input
                    type="tel"
                    className="form-control-input"
                    placeholder="(Optional)"
                    id="phone_number"
                    value={detail.phone_no}
                    name="phone_no"
                    onChange={handleChange}
                  />
                </div>

                <label htmlFor="message" className="mt-4">
                  What can we help you with
                </label>
                <div className="form-group">
                  <textarea
                    value={detail.message}
                    name="message"
                    onChange={handleChange}
                    className="form-control-textarea "
                    id="message"
                    placeholder="Let’s talk about your idea..."
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="form-control-submit-button">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
