import React from "react";
<<<<<<< HEAD
// import { BsTwitter } from "react-icons/bs";
// import { SiLinkedin } from "react-icons/si";
// import { BsYoutube } from "react-icons/bs";
// import { FaFacebookF } from "react-icons/fa";
import "./Footer.css"
import logo from "./logo.png"
=======
import "./Footer.css";
import logo from "../components/images/logo.png"
>>>>>>> 0510b64cb7cc33f41554ec0a6c249a23421b40f4

function Footer() {
  return (
    <footer>
<div class="footer">
  <div className="logo">
<<<<<<< HEAD
    <img className="footerimg" src={logo} alt=""></img>
=======
    <img src={logo} alt=""></img>
>>>>>>> 0510b64cb7cc33f41554ec0a6c249a23421b40f4
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

<<<<<<< HEAD
<div class="abouthim" style={{fontFamily:'Play',fontSize:'1rem',marginTop:'70px',color:'grey',marginRight:'60px'}}>
=======
<div class="abouthim" style={{fontFamily:'Play',fontSize:'0.9em',marginTop:'70px',color:'grey'}}>
>>>>>>> 0510b64cb7cc33f41554ec0a6c249a23421b40f4
We are the dedicated team, 'Init-to Winit,' passionately collaborating on the innovative 'Hire-a-Hand' project at Vishnu Institute of Technology. Committed to excellence, our diverse skills and shared vision drive us to create a platform that seamlessly connects skilled individuals with those seeking assistance. 
</div>
</div>
</footer>
  );
}

export default Footer;