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
        <h4>Lore about Hades goes here...</h4>
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
