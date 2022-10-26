import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <div id="navDiv">
            <h2>The Underworld</h2>
            <NavLink className="nav" style={{ marginRight: "10px" }} to="/" >About The Underworld</NavLink>
            <NavLink className="nav" style={{ marginRight: "10px" }} to="/souls" >Shades Infomation</NavLink>
            <NavLink className="nav" style={{ marginRight: "10px" }} to="/form" >Shades Cast into Underworld</NavLink>
        </div>
    )
}

export default NavBar;