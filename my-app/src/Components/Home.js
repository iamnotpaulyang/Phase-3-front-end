import React from "react";

function Home({demon}) {
  return (
  <div className="home">
    HomePage!
   <li className="card">
    {/* <img src={image}/> */}
    <h4>{demon.name}</h4>
    <h4> {demon.number_of_souls} </h4>
    <h4>{demon.classificaton}</h4>
    </li> 
  </div>
  ) 
}

export default Home;
