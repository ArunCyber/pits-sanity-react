import React from "react";

export default function Form(){
    return(
        <div>
            <label>First name</label>
            <input type="text"></input>
            <label>Last name</label>
            <input type="text"></input>
            <label>Email</label>
            <input type="email"></input>
            <label>Message</label>
            <input type="textarea"></input>
            <button>Send</button>
        </div>
    );
}