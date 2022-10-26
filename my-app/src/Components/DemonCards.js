import React from "react";

function DemonCards({demon}){
    return (
        <div>
        <li className="card">
            <img className="demonImg" src={demon.demon_img} alt={demon.name} />
            <h3>{demon.name}</h3>
            <h5> {demon.soul_num}</h5>
            <h5>{demon.classification}</h5>
        </li> 
        </div>
    )
}
export default DemonCards