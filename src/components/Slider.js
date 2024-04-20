import React,{useState, useEffect} from "react";
import { Link } from "react-router-dom";
import ReactOwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import createClient from "../Client";

export default function Carousel(){
    const[sliderData, setsliderData] = useState(null);

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

    const options = {
        loop: false,
        margin: 10,
        dots:true,
        nav: true,
        navText: ["<div class='nav-btn prev-slide '></div>","<div class='nav-btn next-slide'></div>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    };

    return(
     
        <ReactOwlCarousel className="container px-5 py-24 mx-auto owl-theme " {...options}>
        {Array.isArray(sliderData) && sliderData.map((item, index) => (
             
             <div className="item" key={item._id} >
                <div className="relative bg_main">
                     <img className="itemImage" src={item.imageUrl? item.imageUrl: []}></img>
                     <div className="bgWrap">
                        
                        <h6>{item.caption}</h6>
                        <h3>{item.title}</h3>
                        <Link to={`/pits-sanity-react/post/${item._id}`} className="mt-3">More</Link>
                     </div>
                     
                 </div>
             </div> 
           
      
         ))} 
            
        </ReactOwlCarousel>   
     
          
       
    );
}