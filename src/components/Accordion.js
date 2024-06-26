import React from "react";
import { useState, useEffect } from "react";


const Accordion = ({accordiaonItems}) => {

    const[activeIndex, setActiveIndex] = useState(null);
    
    const onTitleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    }; 
    
    return(

        <div className="accordion container px-5 py-6 mx-auto" >
            <div className="accordionBorder">
            {Array.isArray(accordiaonItems) && 
               accordiaonItems.map((item, index) => {
                    const active = index === activeIndex ? 'active' : '';
                    return(
                    <div className="accordion-item" key={index}>
                        <div className={`title flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3  ${active}`} onClick={() => onTitleClick(index)}>  
                            {item.title}
                            <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                            </svg>
                        </div>
                        <div className={`content p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 ${active}`}>
                            <p className="mb-2 text-gray-500 dark:text-gray-400">{item.text}</p></div>
                    </div>
                    )
   
                })
            }
            </div>           
        </div>

    );
}

export default Accordion;