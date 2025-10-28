import React, { useState } from "react";
import "./Contact.css";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! I’ll get back to you soon 😊");

    // 🔁 Reset form after OK on alert
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="contact">
      <div className="container fade-in-up">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-subtitle">
          I’d love to hear from you! Whether you have a question, project idea, or just want to say hi —
          feel free to send a message below.
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="btn send-btn">
            <FaPaperPlane className="icon" /> Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
