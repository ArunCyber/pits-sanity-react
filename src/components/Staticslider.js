import React,{useState, useEffect} from "react";
import ReactOwlCarousel from "react-owl-carousel";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Staticslider = ({imagesSetItems}) =>{
    console.log(imagesSetItems);

    const options = {
        loop: true,
        margin: 10,
        dots:true,
        nav: true,
        navText: ["<div class='nav-btn prev-slide '></div>","<div class='nav-btn next-slide'></div>"],
        autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 2
            }
        }
    };

    return(
        
        <ReactOwlCarousel className="container px-5 py-24 mx-auto owl-theme " {...options}>
        {Array.isArray(imagesSetItems) && imagesSetItems.map((item, index) => (
             
             <div className="item " key={index} >
                <div>
                     <img className="itemImage" src={item.image? item.image: []}></img>
                 </div>
             </div> 
           
         ))} 
            
        </ReactOwlCarousel>  

    );
}

export default Staticslider;