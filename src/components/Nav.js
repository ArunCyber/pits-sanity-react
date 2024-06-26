import { React}  from "react";
import { Link } from "react-router-dom";

const Nav = ({menu}) => {
    return(
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link className="logo flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <img src="https://staging.pitsolutions.ch/blog/wp-content/uploads/2021/06/pits-web.svg"></img>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center cursor-pointer">
                {Array.isArray(menu) && menu.map((item, index) => (   
                    (item._type === 'linkInternal' ?
                        (item.slug === undefined ? 
                        <Link key={index} className={"mr-5 hover:text-gray-900 " + item._type} to={"/pits-sanity-react/"}>{item.title} </Link>
                        : <Link key={index} className={"mr-5 hover:text-gray-900 "+ item._type} to={"/pits-sanity-react/" + item.slug}>{item.title}</Link>)  
                        : <Link key={index} target="_blank" className={"mr-5 hover:text-gray-900 "+ item._type} to={item.url}>{item.title}</Link>)  
                    ))}     
                </nav>
            </div>
        </header>

    );
}
export default Nav;