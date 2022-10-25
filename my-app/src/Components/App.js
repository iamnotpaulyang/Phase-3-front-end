import '../App.css';
import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router-dom"
import NavBar from "./NavBar.js"
import Home from "./Home.js"
import SoulContainer from "./SoulContainer.js"
import NewSoulForm from "./NewSoulForm.js"

function App() {
  const [souls, setSouls] = useState([])
  const [demons, setDemons] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/souls")
    .then((r) => r.json())
    .then((data) => setSouls(data));
  },[])

  useEffect(() => {
    fetch("http://localhost:9292/demons")
    .then((r) => r.json())
    .then((data) => setDemons(data));
  },[])
  
  function addNewDemon(newDemonObj){
    setDemons ([...demons, newDemonObj])
  }

  function handleDeleteSoul(deleteSoul){
    const remainingSouls = souls.filter((soul)=> {
      return soul.id !== deleteSoul.id
    })
    setSouls(remainingSouls)
  }



  return (
    <div className="App">
      <h2>The Underworld</h2>
      <NavBar className = "NavBar"/> 
      <Routes>
        <Route exact path="/" element={<Home demons= {demons} addNewDemon = {addNewDemon} />} />
        <Route path="/souls" element={<SoulContainer souls={souls} onDeleteSoul={handleDeleteSoul} setSouls={setSouls} />} />
        <Route path="/form" element={<NewSoulForm />} />
      </Routes>   
    </div>
  );
}

export default App;
