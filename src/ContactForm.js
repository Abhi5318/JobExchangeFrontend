import React, { useState } from "react";
import axios from "axios";
import "./ContactForm.css"; // Import the CSS file

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/contact", // Updated URL to localhost
        formData
      );
      setResponseMessage(response.data.message);
      setFormData({ name: "", email: "", message: "", subject: "" }); // Reset the form
    } catch (error) {
      if (error.response) {
        setResponseMessage(`Error: ${error.response.data.error}`);
      } else {
        setResponseMessage("Failed to submit the form.");
      }
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-form-container">
        <h1 className="form-title">Get in Touch</h1>
        <p className="form-description">
          Have any questions? We'd love to hear from you.
        </p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label>Subject:</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="form-input"
              placeholder="Subject"
            />
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="form-textarea"
              placeholder="Your Message"
            />
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
        {responseMessage && (
          <p className="response-message">{responseMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ContactForm;
