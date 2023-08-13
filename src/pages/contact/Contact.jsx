import React, { useState } from "react";
import "./contact.scss";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="contact">
      <Navbar />
      <div className="contactCart">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          Name:{" "}
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter Name:"
          />
          Email:{" "}
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter Email:"
          />
          Message:{" "}
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter Message:"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default ContactForm;
