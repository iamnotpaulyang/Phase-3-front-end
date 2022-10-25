import React from "react";

function DemonCards({demon}){
    return (
        <li className="card">
            {/* <img src={image}/> */}
            <h3>{demon.name}</h3>
            <h5> {demon.soul_num} </h5>
            <h5>{demon.classification}</h5>
        </li> 
    )
}
export default DemonCards