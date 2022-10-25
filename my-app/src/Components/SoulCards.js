import React from "react";

function SoulCards({soul, onDeleteSoul}){

    function handleDelete(){
        fetch(`http://localhost:9292/souls/${soul.id}`,{
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then((deleteSoul) => onDeleteSoul(deleteSoul))
    }

    return (
        <li className="card">
           <h2>{soul.name}</h2>
           <h4>{soul.location}
            {/* <br/>
            <button className="btn-primary">Update</button> */}
           </h4> 
           <h4>Years dead: {soul.years_dead} years</h4>
           <h4>Sentenced to rot: {soul.sentence} years</h4>
           <button className="btn-primary" onClick={handleDelete} >Click to help this Shade Escape!</button>
        </li>
    );
}

export default SoulCards;