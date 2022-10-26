import React, {useState} from "react";
import DemonCards from "./DemonCards";

function Home({demons, addNewDemon}) {
  
  const [name, setName] = useState ("")
  const [image, setImage] = useState("")
  const [classification, setClassification] = useState("")
  
  const newDemonObj={
  
    name: name,
    image: image,
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
    <div className="cards"> 
        {demons.map((demon) => {
        return <DemonCards demon={demon} key={demon.id} />
        })}
    </div>
    <div className="new-demon-form">
      <h2>New Demon</h2>
      <form onSubmit={handleSubmit}>
        <input value={name} onChange={(e) => setName(e.target.value)} name="name" placeholder="Demon name" />
        <br />
        <input value={image} onChange={(e) => setImage(e.target.value)} type="text" name="image" placeholder="Image URL" />
        <br />
        <input value={classification} onChange={(e) => setClassification(e.target.value)} classification="classfication" placeholder="Demon classification" />
        <br />
        <button className="btn-primary" type="submit">Add Demon</button>
      </form>
    </div>
  </div>
  ) 
}

export default Home;
