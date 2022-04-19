import React from "react";
import Button from '../Navbar/Button'
import '../Navbar/styles.css'
import profile from './images/profile.png'

export default function Home() {
  return (
    <div className="sectionOne">
      <div >
          <h6>Hi i am</h6>
          <h1> SIMEON OJETOLA</h1>
          <h2>Front-end software developer</h2>
          <p>The best in what we do, Friendly and good looking</p>
          <span className="btnSection">

          <Button />
          

          </span>
      </div>
      <div>
          <img src={profile}/>
      </div>
      <div></div>
    </div>
  );
}
<img ></img>