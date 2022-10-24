
import '../App.css';
import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import NavBar from "./NavBar.js"
import Home from "./Home.js"
import SoulCards from "./SoulCards.js"
import NewSoulForm from "./NewSoulForm.js"

function App() {

  useEffect(() => {
    fetch("http://localhost:9292")
    .then((r) => r.json())
    .then((data) => console.log(data));
  },[])
  
  return (
    <div className="App">
      <NavBar className = "NavBar"/> 
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/souls" element={<SoulCards />} />
        <Route path="/form" element={<NewSoulForm />} />
      </Routes>   
    </div>
  );
}

export default App;
