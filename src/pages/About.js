import { React, useEffect, useState }  from "react";
import createClient from "../Client"; 
import { Carousel } from "../components";

const About = () =>{
    const[aboutData, setAboutData] = useState([]);

    useEffect(() => {
        createClient.fetch(`*[_type=="page"&& slug.current == "about-us"][0]{
            ...
        }
        `).then((data) => setAboutData(data))
        .catch(console.error);
    },[])
    console.log(aboutData);
    return(
       
        <>
            <div className="titleBar"><h1>About Us</h1></div>
            <div className="pad-35-25"><Carousel /></div>   
        </>
    );
}

export default About;