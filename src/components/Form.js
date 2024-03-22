import React from "react";
import createClient from "../Client";

export default function Form(){

    // const handleFormdata = async (event) => {
    //     try {
    //         // Send data to Sanity
    //         await createClient
    //         .patch(id)
    //         .set({ firstname: updatedTitle,
    //          lastname:,
    //         email:,
    //     message:})
    //         .commit();
    //       console.log('Data sent to Sanity successfully');
    //       // Optionally, reset form fields or show success message
    //     } catch (error) {
    //       console.error('Error sending data to Sanity:', error.message);
    //     }
    //   };

    return(
        <div className="formdata">
            <label>First name</label>
            <input type="text"></input>
            <label>Last name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Message</label>
            <input type="textarea"></input>
            {/* <button onClick={(e)=>handleFormdata(e)}>Send</button> */}
        </div>
    );
}