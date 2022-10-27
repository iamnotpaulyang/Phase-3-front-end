import React from "react";

function DemonCards({demon}){
    return (
        <li id="demon_card">
            <img className="demonImg" src={demon.demon_img} alt={demon.name} />
            <h3 className="card_text">{demon.name}</h3>
            <h5 className="card_text">The {demon.classification}</h5>
            <h5 className="card_text">Guarding <u>{demon.soul_num ? demon.soul_num : 0}</u> Shades</h5>
        </li> 
    )
}
export default DemonCards