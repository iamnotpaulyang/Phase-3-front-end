import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

function NewSoulForm({demons, addNewSouls}){
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [sentence, setSentence] = useState(0);
    const [demonId, setDemonId] = useState(null)

    const newSoulObj={
            name: name,
            location: location,
            sentence: parseInt(sentence),
            demon_id: parseInt(demonId)
          }

    let navigate = useNavigate();
    
    function handleSubmit (e){
        e.preventDefault();
        if (demonId === null){
            window.alert("Select Guard Demon")
        } else {
            navigate("/souls");
            fetch("http://localhost:9292/souls", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: JSON.stringify(newSoulObj)
            })
            .then(r => r.json())
            .then (newSoulObj => {addNewSouls(newSoulObj)})
        }
    }

    return (
        <div>
            <form className="new-soul-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Soul's Name: </label>
                <input type='text' name='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <br />
                <label htmlFor="location">Location: </label>
                    <select id="location" name="location" onChange={(e) => setLocation(e.target.value)}>
                        <option value=""> Select...</option>
                        <option value="Tartarus"> Tartarus</option>
                        <option value="Asphodel"> Asphodel</option>
                        <option value="Elysium"> Elysium</option>
                        <option value="Temple of Styx"> Temple of Styx</option>
                    </select>
                <br />
                <label htmlFor='demonId'>Guard Demon: </label>
                 <select id="demonId" name="demonId" onChange={(e)=>{setDemonId(e.target.value)}}>
                        <option value=""> Select...</option>
                        {demons.map((demon) => {
                            return <option key={demon.id} value={demon.id}>{demon.name}</option>
                            })}
                 </select>
                <br />
                <label htmlFor='sentence'>Sentence: </label>
                <input type='integer' name='sentence' value={sentence} onChange={(e)=>{setSentence(e.target.value)}}/>
                <br />
                <button className="btn-primary" type="submit">Add New Soul</button>
            </form>
        </div>
    );
}

export default NewSoulForm;