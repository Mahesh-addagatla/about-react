import React from "react";
import "./Footer.css";
import logo from "../components/images/logo.png"

function Footer() {
  return (
    <footer>
<div class="footer">
  <div className="logo">
    <img src={logo} alt=""></img>
  </div>
<div class="row">
HIRE-A-HAND

<ul>
<li><a href="#">Contact us</a></li>
<li><a href="#">GDSC</a></li>
<li><a href="#">Vishnu Institute of Technology</a></li>
<li><a href="#">Terms & Conditions</a></li>
<li><a href="#">Career</a></li>
</ul>
</div>

<div class="abouthim" style={{fontFamily:'Play',fontSize:'0.9em',marginTop:'70px',color:'grey'}}>
We are the dedicated team, 'Init-to Winit,' passionately collaborating on the innovative 'Hire-a-Hand' project at Vishnu Institute of Technology. Committed to excellence, our diverse skills and shared vision drive us to create a platform that seamlessly connects skilled individuals with those seeking assistance. 
</div>
</div>
</footer>
  );
}

export default Footer;