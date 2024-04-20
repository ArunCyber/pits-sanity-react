import React from "react";
import { useState, useEffect } from "react";
import createClient from "../Client";
import Checkbox from "./Checkbox";
import Form from "./Form";

const staicAccordiaonItems = [
    {title:"title 1", description : <Form></Form>},
    {title:"title 2", description : " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"},
    {title:"title 3", description : <Checkbox></Checkbox>}
]

export default function Accordion(){

    const[activeIndex, setActiveIndex] = useState(null);
    const[accordiaonItems, setAccordiaonItems] = useState(null);

    useEffect(() => {
        createClient.fetch(`*[_type == 'service']{
            title,
            description,
            _id
        }`).then((data) => setAccordiaonItems(data))
        .catch(console.error);
    },[accordiaonItems])

    const onTitleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
        console.log('active');
      }; 

    return(
        <div className="accordion" >
            {Array.isArray(accordiaonItems) && 
                [...staicAccordiaonItems, ...accordiaonItems].map((item, index) => {
                    const active = index === activeIndex ? 'active' : '';
                    return(
                    <div className="accordion-item" key={index}>
                        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>  
                            <i className="arrow">
                            </i>{item.title}
                        </div>
                        <div className={`content ${active}`}>{item.description}</div>
                    </div>
                    )
                    
                   
                   
                })
            }
            
        </div>
    );
}