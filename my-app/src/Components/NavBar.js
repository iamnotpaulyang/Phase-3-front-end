import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div id="navDiv">
      <h1>The Underworld</h1>
      <NavLink className="nav" style={{ marginRight: "10px" }} to="/">
        About The Underworld
      </NavLink>
      <NavLink className="nav" style={{ marginRight: "10px" }} to="/souls">
        Shades Information
      </NavLink>
      <NavLink className="nav" style={{ marginRight: "10px" }} to="/form">
        Shades Cast Into Underworld
      </NavLink>
    </div>
  );
}

export default NavBar;
