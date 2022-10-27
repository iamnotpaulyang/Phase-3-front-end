import React, { useState } from "react";

function SoulCards({soul, onDeleteSoul, onUpdateLocation}){
    const [location, setLocation] = useState("")
    const [isShown, setIsShown] = useState(false)

    function handleDelete(){
        fetch(`http://localhost:9292/souls/${soul.id}`,{
            method: 'DELETE',
        })
        .then((r) => r.json())
        .then((deleteSoul) => onDeleteSoul(deleteSoul))
    }

    const handleClick = (e) => {
        setIsShown(current => !current)
    }

    function handleUpdate(e){
        e.preventDefault();
        fetch(`http://localhost:9292/souls/${soul.id}`,{
            method: 'PATCH', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                location: location
            }),
        }) 
        .then((r) => r.json())
        .then((updateLocation) => onUpdateLocation(updateLocation))
    }

    return (
        <li className="card">
           <h2 className="card_text" id="card_title">{soul.name}</h2>
           <img className="shade" src="https://cdn.frankerfacez.com/emoticon/533554/4" alt="Shade" />
           <h4 className="card_text">{soul.location}
            <br/>
            <button className="btn-primary" onClick={handleClick}>
                Update
            </button>
            {isShown && (
            <form>
                <select className = "form-input" id="location" name="location" onChange={(e) => setLocation(e.target.value)}>
                    <option value=""> Select...</option>
                    <option value="Tartarus"> Tartarus</option>
                    <option value="Asphodel"> Asphodel</option>
                    <option value="Elysium"> Elysium</option>
                    <option value="Temple of Styx"> Temple of Styx</option>
                </select>
                <button type = "submit" className="btn" onClick={handleUpdate}> New Location!</button>
            </form>
            )}
            </h4> 
            <h4 className="card_text">Years dead: {soul.years_dead} years</h4>
            <h4 className="card_text">Sentenced to rot: {soul.sentence} years</h4>
            <button className="btn-primary" onClick={handleDelete} >Help this Shade Escape!</button>
        </li>
    );
}

export default SoulCards;