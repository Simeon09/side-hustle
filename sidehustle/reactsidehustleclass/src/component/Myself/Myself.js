import React from "react";
import self from "../Home/images/self.png";
import "../Navbar/styles.css";
function Myself() {
  return (
    <div className="myself">
      <div>
        <img src={self} />
      </div>

      <div>
        <h6>My Intro</h6>
        <h1>About Me</h1>
        <p>
          A young talented open minded graduate with analytical and problem
          solving skill, a high level of work ethics and the asbility to get
          work done to <br />
          to a high degree of excellence with ;little or no
          supervision,individually and as a team member
        </p>
        <p>PHONE: 09036287406</p>
        <p> EMAIL: simeonolawale69@gmail.com</p>
        <p> GITHUB: Simeon 09</p>
      </div>
    </div>
  );
}

export default Myself;
