import React, { useState } from "react";
import createClient from "../Client"; // Assuming you have a Sanity client setup file

export default function Form() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: ""
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFormdata = async (event) => {
    event.preventDefault();
    try {
      // Send data to Sanity
      await createClient.create({
        _type: "form", // Replace "formData" with your document type
        ...formData
      });
      console.log("Data sent to Sanity successfully");
      // Optionally, reset form fields or show success message
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        message: ""
      });
    } catch (error) {
      console.error("Error sending data to Sanity:", error.message);
    }
  };

  return (
    <div className="formdata">
      <form onSubmit={handleFormdata}>
        <label>First name</label>
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleInputChange}
        />
        <label>Last name</label>
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleInputChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}