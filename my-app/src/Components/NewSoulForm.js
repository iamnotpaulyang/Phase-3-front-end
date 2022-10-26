import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
//need onSubmit with form and need e.preventDefault()
function NewSoulForm({demons, addNewSouls}){
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [numberOfSouls, setNumberOfSouls] = useState("");
    const [sentence, setSentence] = useState(0);

    const newSoulObj={
            name: name,
            location: location,
            numberOfSouls: numberOfSouls,
            sentence: parseInt(sentence),
            demon_id: 1
          }

    let navigate = useNavigate();
    
    function handleSubmit (e){
        e.preventDefault();
        navigate("/souls");

        fetch("http://localhost:9292/souls", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(newSoulObj)
          })
          .then(r => r.json())
          .then (newSoulObj => {
            addNewSouls(newSoulObj)
            // handleDemon(newSoulObj)
        })
    }

    // function handleDemon(){
    //     demons.filter((demon) => {
    //         console.log(demon.name)
    //         if (numberOfSouls === demon.name) {
    //             return demon.id
    //         }
    //         else {
    //             return alert("Demon Not Found")
    //         }   
    //     })
    // }

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
                <label htmlFor='numberOfSouls'>Guard Demon: </label>
                 <select id="numberOfSouls" name="numberOfSouls" onChange={(e)=>{setNumberOfSouls(e.target.value)}}>
                        <option value=""> Select...</option>
                        {demons.map((demon) => {
                            return <option value={demon.name}>{demon.name}</option>
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