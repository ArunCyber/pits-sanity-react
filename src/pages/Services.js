import {React, useEffect, useState } from "react";
import { Accordion, Grid, Staticslider } from "../components";
import createClient from "../Client"; 

const Services =() =>{
    const[accordData, setAccordData] = useState([]);
    const[gridData, setGridData] = useState([]);
    const[imageSet, setImageSetData] = useState([]);

    useEffect(() => {
        createClient.fetch(`*[_type == "page" && slug.current == "services"][0] {
            "grid": body[_type == "module.grid"][0].items[]{
              title,
              "image": image.asset->url,
              "text":body[0].children[].text[0],
            },
            "accordion":body[_type == "module.accordion"][0].groups[]{
                "text":body[0].children[].text[0],
                title
            },
            "imagesSet":body[_type == "module.images"][0].modules[]{
                "image": image.asset->url,
            }
          }`).then((data) => {
            setGridData(data.grid)
            setAccordData(data.accordion)
            setImageSetData(data.imagesSet)
        })
        .catch(console.error);
    },[])


    return(
        <div>
            <div className="titleBar"><h1>Services</h1></div>
            <Grid gridItems = {gridData}></Grid>
            <Accordion accordiaonItems ={accordData}></Accordion>
            <Staticslider imagesSetItems = {imageSet}></Staticslider>
        </div>
       
    );
}
export default Services;