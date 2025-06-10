import React, { useState } from "react";
import "./Contact.css"; // Make sure this CSS is in the same folder or update the path accordingly
import emailjs from "emailjs-com";

const Contact = () => {
  const [statusMessage, setStatusMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatusMessage("Sending...");

    emailjs
      .sendForm(
        "service_s13tajd",
        "template_ip89odt",
        e.target,
        "ZzeJ9oBQfYbqfXw3Y"
      )
      .then(() => {
        setStatusMessage("Message sent successfully!");
        e.target.reset();
        setIsSending(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatusMessage("Failed to send message. Please try again.");
        setIsSending(false);
      });
  };

  return (
    <section className="container" id="contact">
      <div className="text-center mb-12">
        <h2 className="heading">Get In Touch</h2>
        <p className="subheading">
          Feel free to reach out for collaborations, opportunities, or just to
          say hello!
        </p>
      </div>

      <div className="contact-grid">
        <div className="card">
          <h3 className="card-title">Contact Information</h3>
          <div className="info-group">
            <div className="info-item">
              <div className="icon">📞</div>
              <div>
                <p className="label">Phone</p>
                <a href="tel:+916302353764">+91 6302353764</a>
              </div>
            </div>
            <div className="info-item">
              <div className="icon">📧</div>
              <div>
                <p className="label">Email</p>
                <a href="mailto:veereshbaitigeri143@gmail.com">
                  veereshbaitigeri143@gmail.com
                </a>
              </div>
            </div>
            <div className="info-item">
              <div className="icon">📍</div>
              <div>
                <p className="label">Location</p>
                <p>Hyderabad, Telangana</p>
              </div>
            </div>
          </div>

          <h3 className="card-title mt">Social Profiles</h3>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 LinkedIn
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 GitHub
            </a>
          </div>
        </div>

        <div className="card">
          <h3 className="card-title">Send Me a Message</h3>
          <form id="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Name</label>
              <input
                id="fullName"
                name="name"
                type="text"
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email_id">Email</label>
              <input
                id="email_id"
                name="email"
                type="email"
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your message"
                rows="5"
                required
              ></textarea>
            </div>
            <button
              className="contactBtn"
              type="submit"
              id="submit-btn"
              disabled={isSending}
            >
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
          <p id="form-status" className="form-status">
            {statusMessage}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
