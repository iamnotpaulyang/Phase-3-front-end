import React from "react";

function SoulCards({soul}){
    return (
        <li className="card">
           <h2>{soul.name}</h2>
           <h4>{soul.location}</h4>
           <h4>Years dead: {soul.years_dead} years</h4>
           <h4>Sentenced to rot: {soul.sentence} years</h4>
        </li>
    );
}

export default SoulCards;