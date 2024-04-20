import {React, useEffect, useState } from "react";
import createClient from "../Client"; 
import Form from "../components/Form";

export default function Contact(){
    const[contactData, setContactData] = useState([]);

    useEffect(() => {
        createClient.fetch(`*[_type=="page"&& slug.current == "contact"][0]
        `).then((data) => setContactData(data))
        .catch(console.error);
    },[])

    return(
        <>
         
            <div className="titleBar"><h1>Contact</h1></div>
            {contactData && (  
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed" ></iframe>
                        {/* <iframe width="100%" height="600" frameborder="0" marginheight="0" marginwidth="0" 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3921.2591185390036!2d76.90821021479777!3d10.850515360485981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0805e808ed53ff%3A0xa9a1e23bb5171591!2sTechnopark%2C%20Trivandrum%2C%20Kerala!5e0!3m2!1sen!2sin!4v1642122449458!5m2!1sen!2sin" title="Technopark, Trivandrum, Kerala"></iframe> */}
                        <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div class="lg:w-1/2 px-6">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p class="mt-1">{contactData.contactAddress}</p>
                            </div>
                            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a class="custom-text-indigo-500 leading-relaxed">{contactData.contactEmail}</a>
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p class="custom-text-indigo-500 leading-relaxed">{contactData.contactPhone}</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p class="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
                        <div class="relative mb-4">
                            <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                            <input type="text" id="name" name="name" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                        </div>
                        <div class="relative mb-4">
                            <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                            <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></input>
                        </div>
                        <div class="relative mb-4">
                            <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                            <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button class="custom-text-gray-700 custom-bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
                        <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </div>
                    {/* <Form></Form> */}

                </div>
            </section>
            )}
        </>
      

        // <div>
        //      <div className="titleBar"><h1>Contact</h1></div>
        //      <Form></Form>

        // </div>
        
    );
}
