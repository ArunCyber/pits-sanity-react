import { React, useEffect, useState }  from "react";
import createClient from "../Client"; 
import { Carousel } from "../components";

const About = () =>{
    const[aboutData, setAboutData] = useState([]);
    const[sliderData, setsliderData] = useState(null);

    useEffect(() => {
        createClient.fetch(`*[_type=="page"&& slug.current == "about-us"][0]{
            ...
        }
        `).then((data) => setAboutData(data))
        .catch(console.error);
    },[])

    useEffect(() => {
        console.log('slider');
        createClient.fetch(`*[_type == 'post']{
            title,
            _id,

            description,
            "imageUrl": poster.asset->url,
            "caption": poster.caption,
            poster,
            _ref
        }`).then((data) => setsliderData(data))
        .catch(console.error);
    },[])

    console.log(sliderData);
    return(
       
        <>
            <div className="titleBar"><h1>About Us</h1></div>
            <div className="pad-35-25"> 
                {sliderData !== null && <Carousel sliderData={sliderData} />}
            </div>   
        </>
    );
}

export default About;