import {React, useEffect, useState } from "react";
import { Carousel } from "../components";
import createClient from "../Client"; 
import { Link } from "react-router-dom";

export default function Home(){
    const[homeData, setHomeData] = useState([]);

    useEffect(() => {
        createClient.fetch(`*[_type=="home"]{
            _createdAt,
            hero[],
            title,
            'imageUrl': hero.content[].image.asset ->url,
            'heroLink': hero.links[].title,
            modules[],
            'moduleimageUrl': modules[].image.asset ->url,
            
          }`).then((data) => setHomeData(data))
        .catch(console.error);
    },[])

    return (
        <>
         {homeData.length > 0 && (  
        
         <section className="text-gray-600 body-font">
            <div className="container-fluid relative">
                <img className="object-cover object-center w-full" alt="hero" src={homeData[0].imageUrl}></img>
                <div className="absolute z-10 banner_content">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{homeData[0].hero.title}</h1>
                    <p className="mb-6 leading-relaxed text-white">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className="flex justify-start">
                        <Link className="mr-5 hover:text-gray-900 text-white" to={"/pits-sanity-react/services"}>{homeData[0].heroLink}</Link>
                        </div>
                </div>
            </div>
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src={homeData[0].imageUrl}></img>
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{homeData[0].hero.title}
                    </h1>
                    <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                    <div className="flex justify-center">
                        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                        <Link  to={"/pits-sanity-react/services"}>{homeData[0].heroLink}</Link>    
                        </button>
                    </div>
                </div>
            </div>
            

            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap w-full mb-20">
                    <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
                    </div>
                    <p class="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                </div>
                <div class="flex flex-wrap -m-4">
                {/* {homeData.modules.map((item, index) =>
                    <div class="xl:w-1/4 md:w-1/2 p-4">
                        <div class="bg-gray-100 p-6 rounded-lg">
                            <img class="h-40 rounded w-full object-cover object-center mb-6" src={item.moduleimageUrl} alt="content"></img>
                            <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                            <h2 class="text-lg text-gray-900 font-medium title-font mb-4">Chichen Itza</h2>
                            <p class="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                ))} */}
                </div>
            </div>
        
            

          

        {/* <div>
           <div className="titleBar"><h1>Home</h1></div>
            <div className="pad-35-25"><Carousel /></div>     
        </div>  */}

        </section>
          )}
        </>
    );
}