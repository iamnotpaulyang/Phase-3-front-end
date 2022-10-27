import React, {useState} from "react";
import DemonCards from "./DemonCards";

function Home({demons, addNewDemon}) {
  
  const [name, setName] = useState ("")
  const [demonImg, setDemonImg] = useState("")
  const [classification, setClassification] = useState("")
  
  const newDemonObj={
    name: name,
    demon_img: demonImg,
    classification: classification
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    fetch("http://localhost:9292/demons", {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(newDemonObj)
    })
    .then(r => r.json())
    .then (newDemonObj => addNewDemon(newDemonObj))
  }
  
    return (
    <div className="home">
      <div className="about">
        <h2>About The Underworld</h2>
        <h4>The Underworld app is about...</h4>
        <h4>Hades, god of the Greek underworld and main antagonist of Hades, the Action RPG, is an emotionally distant workaholic god who treats his son Zagreus with cold, barely concealed disdain. Hades however, is not the Greek equivalent of the Christian Devil contrary to what movies like Disney’s Hercules or Clash of the Titans suggest. Given that Hades is no longer with his siblings on Olympus, he is no longer considered an Olympian God, despite the fact that Zeus, Poseidon, Hera, Demeter, and Hestia all remain deities of the Olympian pantheon. As the legend goes, the three brothers Zeus, Poseidon, and Hades were each to take a realm: Zeus took the sky and air, Poseidon took the sea and water, and Hades was left with the Underworld, making an outcast of him eternally. In both classic mythology and this game, Hades is a stoic, even-handed god who focuses on professionally carrying out the divine duties, contrary to the decadent depravities of other gods like Zeus or Poseidon. Indeed, whenever Zagreus falls in combat, he can visit Hades at his desk, where the Lord of the Underworld is constantly occupied filling out paperwork and sorting the souls of the dead into their rightful afterlives.</h4>
      </div>    
      <div className="cards"> 
        {demons.map((demon) => {
        return <DemonCards demon={demon} key={demon.id} />
        })}
    </div>
    <div className="new-demon-form">
      <form onSubmit={handleSubmit}>
        <h3>New Demon:</h3>
        <input className = "form-input" value={name} onChange={(e) => setName(e.target.value)} name="name" type="text" placeholder="Demon name" />
        <br />
        <input className = "form-input" value={demonImg} onChange={(e) => setDemonImg(e.target.value)} type="text" name="demon_img" placeholder="Image URL" />
        <br />
        <input className = "form-input" value={classification} onChange={(e) => setClassification(e.target.value)} type="text" classification="classfication" placeholder="Demon classification" />
        <br />
        <button className="btn-primary" type="submit">Add Demon</button>
      </form>
    </div>
  </div>
  ) 
}

export default Home;
