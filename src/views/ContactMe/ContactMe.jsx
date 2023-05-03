import React, { useState, useRef } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./ContactMe.css";
import emailjs from "@emailjs/browser";

export default function ContactMe(props) {
  const form = useRef();
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
    };

    try {
      await emailjs.send(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_PUBLIC_KEY
      );
      setEmailSent(true);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  return (
    <div className="main-container" id={props.id || ""}>
      <ScreenHeading
        subHeading={"RenanSoftwareDev@gmail.com"}
        title={"Contact Me"}
      />
      <div className="central-form">
        <div>
          {!emailSent ? (
            <form ref={form} onSubmit={handleSubmit}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control-sm"
                minLength="2"
                name="user_name"
                required
              />

              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control-sm"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                title="Please enter a valid email address."
                name="user_email"
                required
              />

              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                name="message"
                className="form-control"
                minLength="5"
                required
              />

              <div className="send-btn">
                <button type="submit" className="contact-btn">
                  send
                  <i className="fa fa-paper-plane" />
                </button>
              </div>
            </form>
          ) : (
            <div className="email-sent-message">
              Your email has been sent successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
