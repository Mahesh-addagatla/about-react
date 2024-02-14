import React, { Component } from "react";
import "./Navbarstyle.css";
import { Menuitems } from "./Menuitems";
import {Link} from "react-router-dom";


class Navbar extends Component {
    state={clicked:false};
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    scrollToFooter = () => {
        const footer = document.getElementById("footer");
        footer.scrollIntoView({ behavior: "smooth" });
      };
    render() {
        return (
            <div className="nav">
            <nav className="Navbaritems">
                <h1 className="navbar-logo">Hire-A-Hand</h1>
                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked?"fas fa-times":"fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked?"nav-menu active":"nav-menu "}>
                    {Menuitems.map((item, index) => (
                        <li key={index} className={index === this.state.activeItem ? "active li" : "li"} onClick={() => this.handleClick(index)}>
                            <Link className={item.cName} to={item.url} ><i className={item.icon}></i>{item.title}</Link>
                        </li>
                    ))}
                    <button>Sign out</button>
                </ul>
            </nav>
        </div>
        );
    }
}

export default Navbar;