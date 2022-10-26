import React, {useState} from "react";
//need onSubmit with form and need e.preventDefault()
function NewSoulForm({addNewSouls}){
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [yearsDead, setYearsDead] = useState(0);
    const [sentence, setSentence] = useState(0);

    function handleSubmit (e){
        e.preventDefault();

        const newSoulObj={
  
            name,
            location,
            years_dead: parseInt(yearsDead),
            sentence: parseInt(sentence)
          }

        fetch("http://localhost:9292/souls", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify(newSoulObj)
          })
          .then(r => r.json())
          .then (newSoulObj => addNewSouls(newSoulObj))
    }





    return (
        <div>
            <form className="new-soul-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Soul's Name: </label>
                    <input type='text' name='name' value={name} onChange={(e)=>{setName(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor="location">Location: </label>
                    <input type='text'name='location' value={location} onChange={(e)=>{setLocation(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor='years-dead'>Year's Dead: </label>
                    <input type='integer' name='years-dead' value={yearsDead} onChange={(e)=>{setYearsDead(e.target.value)}}/>
                </div>
                <div>
                    <label htmlFor='sentence'>Sentence: </label>
                    <input type='integer' name='sentence' value={sentence} onChange={(e)=>{setSentence(e.target.value)}}/>
                </div>
                <div>
                <button type="submit">Add New Soul</button>
                </div>

            </form>
        </div>
    );
}

export default NewSoulForm;