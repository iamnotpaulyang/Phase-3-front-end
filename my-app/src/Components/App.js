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





  return (
    <div className="App">
      <h2>The Underworld</h2>
      <NavBar className = "NavBar"/> 
      <Routes>
        <Route exact path="/" element={demons.map((demon) => {return <Home key={demon.id} demon= {demon} addNewDemon = {addNewDemon} />})} />
        <Route path="/souls" element={<SoulContainer souls={souls} />} />
        <Route path="/form" element={<NewSoulForm />} />
      </Routes>   
    </div>
  );
}

export default App;
