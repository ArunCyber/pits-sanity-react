import React, { useState } from "react";
import createClient from "../Client"; 

const Form = () => {
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

  const handleFormSubmit  = (event) => {
    event.preventDefault();
    console.log('accordion');
    try {
      // Send data to Sanity
      createClient.create({
        _type: "form", 
        ...formData
      });
      console.log("Data sent to Sanity successfully");
      
      //reset form fields or show success message
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

      <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
            <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
            <form onSubmit={handleFormSubmit}>
                <div class="relative mb-4">
                    <label htmlFor="firstname" class="leading-7 text-sm text-gray-600">Name:</label>
                    <input type="text" id="firstname" name="firstname" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={formData.firstname} onChange={handleInputChange} />
                </div>
                <div class="relative mb-4">
                    <label htmlFor="lastname" class="leading-7 text-sm text-gray-600">Last Name:</label>
                    <input type="text" id="lastname" name="lastname" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={formData.lastname} onChange={handleInputChange} />
                </div>
                <div class="relative mb-4">
                    <label htmlFor="email" class="leading-7 text-sm text-gray-600">Email:</label>
                    <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" value={formData.email} onChange={handleInputChange} />
                </div>
                <div class="relative mb-4">
                    <label htmlFor="message" class="leading-7 text-sm text-gray-600">Message:</label>
                    <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={formData.message} onChange={handleInputChange}></textarea>
                </div>
                <button type="submit" class="custom-text-gray-700 custom-bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>
                <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
            </form>
        </div>
       
  );
}

export default Form;