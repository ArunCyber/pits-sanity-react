import {React} from "react";

const Grid =({gridItems}) =>{
    return(
    <div className="container px-5 py-6 mx-auto">
        <ul className="list">
            {Array.isArray(gridItems) && 
               gridItems.map((item, index) => (
            <li className="listItem" key={index}>
                <div className="listImage">
                    <img href="" src={item.image}></img>
                    <div className="listContent">
                        <div className="text-center mb-12">
                            <span><strong class="titleName">{item.title}</strong></span>
                        </div>
                    </div>
                    <div className="listTitleDetails">
                        <div className="text-center">
                            <span><strong>{item.text}</strong></span>
                        </div>
                    </div>
                </div>
            </li>
            ))}
        </ul>
    </div>
  
    );
}

export default Grid;