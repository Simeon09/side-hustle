import React from "react";
import './styles.css';
import Button from './Button'

function Navbar() {
  return (
    <header>

    <div className="header">
      <h1 className="logo">S</h1>
      <ul className="links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li> <a href="#">Testimonial</a></li>
        <li> <a href="#">blog</a></li>
        <li><a href="#">  <Button /></a></li>
      </ul>
    </div>

    </header>

  );
}

export default Navbar;
