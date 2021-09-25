import React, { useState } from "react";
import credlogo from "./cred-logo.png";
import "./Navbar.css";
export default function Navbar() {
  const [navbtn, setNavbtn] = useState("false");
  const [style, setStyle] = useState({ "color": "white", 'width':'100%',  "margin-top": "-50%" , 'margin-bottom':'5%' , 'position' : 'absolute' });
  const [style2, setStyle2] = useState();
  const [style3, setStyle3] = useState();
  const [style1, setStyle1] = useState();
  function toggleNavbar() {
    setNavbtn(!navbtn);
    if (navbtn) {
      setStyle1({ 'display':'none' });      
      setStyle3({ 'transform': 'rotateZ(-45deg)' , 'margin-top': '-5%'});      
      setStyle2({ 'transform': 'rotateZ(45deg)'});
      setStyle({ "color": "white", "margin-top": "0%" , 'width':'100%', 'margin-bottom':'5%' , 'position' : 'absolute' });
    } else {
      setStyle1({ 'display' : 'block' });      
      setStyle3({ 'transform': 'rotateZ(0deg)' , 'margin-top': '12%' , });      
      setStyle2({'transform': 'rotateZ(0deg)'});
      setStyle({ "color": "white", "margin-top": "-50%" ,'width':'100%', 'margin-bottom':'5%' , 'position' : 'absolute' });
    }
  }
  return (
      <>
    <div className="credNav">
      <nav>
        <ul className="credNavUL">
          <li className="credLOGO">
            <a href="#">
              <img src={credlogo} className="credlogo" />
            </a>
          </li>
          <li>
            <a href="#">credit score check</a>
          </li>
          <li>
            <a href="#">credit card bill payment</a>
          </li>
          <li>
            <a href="#">blog</a>
          </li>
          <li>
            <a href="#">we're hiring</a>
          </li>
          <li>
            <button onClick={toggleNavbar}>
              <div className="navb" style={style1} ></div>
              <div className="navb" style={style2}></div>
              <div className="navb" style={style3}></div>
            </button>
          </li>
        </ul>
      </nav>
    </div>
    <div className="toggleNav" style={style}>
        <ul className="credNavUL2">
          <li>
            <a href="#">credit score check</a>
          </li>
          <li>
            <a href="#">credit card bill payment</a>
          </li>
          <li>
            <a href="#">blog</a>
          </li>
          <li>
            <a href="#">we're hiring</a>
          </li>
        </ul>
      </div>
    </>
  );
}
