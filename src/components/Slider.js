import React,{useState, useEffect} from "react";
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
            'imageUrl': poster.asset->url,
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
             
             <div className="item transition-all rounded" key={item._id} >
                <div>
                     <img src={item.imageUrl? item.imageUrl: []}></img>
                     <h3>{item.title}</h3>
                     <p>{item.description}</p>
                     {/* <h6>{item}</h6>
                     <p>{item}</p> */}
                 </div>
             </div> 
           
      
         ))} 
            
        </ReactOwlCarousel>   
     
          
       
    );
}