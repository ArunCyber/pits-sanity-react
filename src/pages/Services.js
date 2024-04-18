import React from "react";
import { Accordion } from "../components";

export default function Services(){
    return(
        <div>
            <div className="titleBar"><h1>Services</h1></div>
            <div className="pad-35-25"><Accordion></Accordion>  </div>
        </div>
       
    );
}