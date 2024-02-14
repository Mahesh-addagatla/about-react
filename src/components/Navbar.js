import React, { Component } from "react";
import "./Navbarstyle.css";
import { Menuitems } from "./Menuitems";
import {Link} from "react-router-dom";


class Navbar extends Component {
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    handleContactClick = (event) => {
        event.preventDefault();
        const footer = document.getElementById("footer");
        footer.scrollIntoView({ behavior: "smooth" });
    };
    render() {
        return (
            <div className="nav" style={{position:' sticky',
                top:'0'}}>
            <nav className="Navbaritems">
                
                <h1 className="navbar-logo">Hire-a-Hand</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked?"fas fa-times":"fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked?"nav-menu active":"nav-menu "}>
                    {Menuitems.map((item, index) => (
                        <li key={index} className="li">
                            <Link className={item.cName} to={item.url} onClick={item.title === "Contact" ? this.handleContactClick : null}><i className={item.icon}></i>{item.title}</Link>
                        </li>
                    ))}
                    
                </ul>
            </nav>
        </div>
        );
    }
}

export default Navbar;