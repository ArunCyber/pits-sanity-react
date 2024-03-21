import React from "react";
import { Link } from "react-router-dom";

export default function Nav(){
    return(
        <header>
            <div className="logo">
                <img src="https://staging.pitsolutions.ch/blog/wp-content/uploads/2021/06/pits-web.svg"></img>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/pits-sanity-react/"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/pits-sanity-react/services"}>Services</Link>
                    </li>
                    <li>
                        <Link to={"/pits-sanity-react/contact"}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
        
    );
}