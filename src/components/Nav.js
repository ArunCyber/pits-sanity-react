import { React, useState, useEffect }  from "react";
import { Link } from "react-router-dom";
import createClient from "../Client"; 

const Nav = () => {
    const[navData, setNav] = useState([]);

    useEffect(() => {
        createClient.fetch(`*[_type=="settings"]{
            _createdAt,
            menu[]
            
          }`).then((data) => setNav(data[0].menu.links))
        .catch(console.error);
    },[])

    

    return(
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link className="logo flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src="https://staging.pitsolutions.ch/blog/wp-content/uploads/2021/06/pits-web.svg"></img>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                {Array.isArray(navData) && navData.map((item, index) => (   
                    (item._type === 'linkInternal' ?
                        (item.title === 'Home' ? 
                        <Link key={index} className="mr-5 hover:text-gray-900" to={"/pits-sanity-react/"}>{item.title}</Link>
                        : <Link key={index} className="mr-5 hover:text-gray-900" to={"/pits-sanity-react/" + item.title}>{item.title}</Link>)  
                        : <Link key={index} className="mr-5 hover:text-gray-900" to={item.url}>{item.title}</Link>)  
                    ))}     
                </nav>
            </div>
        </header>

    );
}
export default Nav;