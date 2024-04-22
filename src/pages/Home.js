import {React, useEffect, useState } from "react";
import { Carousel } from "../components";
import createClient from "../Client"; 
import { Link } from "react-router-dom";

const Home = ({menu}) => {
    const[homeData, setHomeData] = useState([]);
    const[MenuData, setMenuData] = useState([]);

    useEffect(() => {
        createClient.fetch(`*[_type=="home"]{
            _createdAt,
            hero[],
            title,
            homeContent,
            'imageUrl': hero.content[].image.asset ->url,
            'heroLink': hero.links[].title,
            modules[]{
                'moduleimageUrl': image.asset ->url,
                'moduleCaption' : caption
            }
            
            
          }`).then((data) => setHomeData(data))
        .catch(console.error);
    },[])

    return (
        <>
         {homeData.length > 0 && (  
        
         <section className="text-gray-600 body-font">
            <div className="container-fluid relative">
                <img className="h-screen object-cover object-center w-full" alt="hero" src={homeData[0].imageUrl}></img>
                <div className="absolute z-10 banner_content">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">{homeData[0].hero.title}</h1>
                    <p className="mb-6 leading-relaxed text-white">{homeData[0].homeContent}</p>
                        <div className="flex justify-start">
                        <Link className="mr-5 hover:text-gray-900 text-white" to={"/pits-sanity-react/services"}>{homeData[0].heroLink}</Link>
                        </div>
                </div>
            </div>
            
            
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                        <div className="h-1 w-20 custom-bg-indigo-500 rounded"></div>
                    </div>
                    <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
                </div>
                <div className="flex flex-wrap -m-4">
                {homeData[0].modules.map((module, index) => (
                    <div className="xl:w-1/4 md:w-1/2 p-4">
                        <div className="bg-gray-100 p-6 rounded-lg">
                            <img className="h-40 rounded w-full object-cover object-center mb-6" src={module.moduleimageUrl} alt="content"></img>
                            <h3 className="tracking-widest custom-text-indigo-500 text-xs font-medium title-font">{module.moduleCaption}</h3>
                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{module.moduleCaption}</h2>
                            <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                        </div>
                    </div>
                ))}
                </div>
            </div>


            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                    <img className="object-cover object-center rounded" alt="hero" src={homeData[0].imageUrl}></img>
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{homeData[0].hero.title}
                    </h1>
                    <p className="mb-8 leading-relaxed">{homeData[0].homeContent}</p>
                    <div className="flex justify-center">
                        <button className="inline-flex custom-text-gray-700 custom-bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                        <Link  to={"/pits-sanity-react/services"}>{homeData[0].heroLink}</Link>    
                        </button>
                    </div>
                </div>
            </div>

        
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex flex-wrap -m-4">
                {Array.isArray(menu) && menu.map((item, index) => (   
                    <div className="p-4 lg:w-1/2 md:w-full">
                        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                            <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full custom-bg-indigo-100 custom-text-indigo-500 flex-shrink-0">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-8 h-8" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">{item.title}</h2>
                                <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                                {item._type === 'linkInternal' ?
                                    (item.title === 'Home' ? 
                                <Link className="mt-3 custom-text-indigo-500 inline-flex items-center" to={"/pits-sanity-react/"}>Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>
                                :<Link className="mt-3 custom-text-indigo-500 inline-flex items-center" to={"/pits-sanity-react/" + item.slug}>Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link>)
                                 :<Link className="mt-3 custom-text-indigo-500 inline-flex items-center" to={item.url}>Learn More
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                                    </svg>
                                </Link> }
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>

          

        {/* <div>
           <div className="titleBar"><h1>Home</h1></div>
            <div className="pad-35-25"><Carousel /></div>     
        </div>  */}
{/* <Carousel></Carousel> */}
        </section>
          )}
        </>
    );
}
export default Home;