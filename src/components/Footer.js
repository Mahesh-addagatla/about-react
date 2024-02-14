import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h4>Hire-A-Hand</h4>
            <p>where freelancers and businesses unite to create exceptional work. We provide a platform for talented individuals to showcase their skills and for clients to find the perfect match for their projects. Join our community and unlock the potential of freelancing today.</p><br />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h4>Contact Us</h4>
            <p><b>Email:</b> example@example.com</p>
            <p><b>Phone:</b> 123-456-7890</p>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12">
            <h4>Follow Us</h4>
            <ul className="list-unstyled">
              <li><i className="fa-brands fa-facebook"></i>Facebook</li>
              <li><i className="fa-brands fa-twitter"></i>Twitter</li>
              <li><i className="fa-brands fa-instagram"></i>Instagram</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-sm">
            <p className="text-center">
              &copy; {new Date().getFullYear()} Your Company | All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;