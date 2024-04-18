import { React, useEffect, useState }  from "react";
import createClient from "../Client"; 

const About = () =>{
    const[aboutData, setAboutData] = useState([]);

    useEffect(() => {
        createClient.fetch(`*[_type=="page"]{
            _createdAt,
            hero,
            title,
            body[],
            slug
            
          }`).then((data) => setAboutData(data))
        .catch(console.error);
    },[])
    console.log(aboutData);
    return(
       
        <></>
    );
}

export default About;