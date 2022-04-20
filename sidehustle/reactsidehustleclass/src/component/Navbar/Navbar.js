import React from "react";
import './styles.css';
import Button from './Button'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>

    <div className="header">
      <h1 className="logo">S</h1>
      <ul className="links">
        <li><a href="#"> <Link to="/home">Home</Link> </a></li>
        <li><a href="#"><Link to="/experience" >Services</Link></a></li>
        <li><a href="#"><Link to="/myself"> Portfolio</Link></a></li>
        <li> <a href="#">Testimonial</a></li>
        <li> <a href="#"><Link to="/footer"> blog</Link></a></li>
        <li><a href="#"> <Link to="/footer"><Button /></Link> </a></li>
      </ul>
    </div>

    </header>

  );
}

export default Navbar;
