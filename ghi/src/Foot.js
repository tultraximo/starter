import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Foot = () => {
  return(
    <>
      <footer className="footer">
        <footer className="bg-info" style={{textAlign: "center", padding: "0px"}}>
            <div><span>{quote}</span></div>
            <div style={{padding: "7px"}}></div>
            <div>
                <span><strong>Team SWANK:</strong> Nancy Chavez, Will Howe, Ana María Pedroza,</span>
            </div>
            <div><span>Kamron Poosti, and Jacob Sullenszino - 2022-2023</span></div>
            <div><NavLink className="nav-link" to="/about-us">About Us</NavLink>|<NavLink className="nav-link" to="/contact-us">Contact</NavLink></div>
        </footer>
      </footer>
    </>
  )
}
export default Foot;
