import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div id="navDiv">
            <NavLink className="nav" style={{ marginRight: "10px" }} to="/" >Home</NavLink>
            <NavLink className="nav" style={{ marginRight: "10px" }} to="/souls" >Souls Info</NavLink>
            <NavLink className="nav" style={{ marginRight: "10px" }} to="/form" >New Soul entering Underworld</NavLink>
        </div>
    )
}

export default NavBar;