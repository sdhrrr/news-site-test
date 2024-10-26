import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export function NavBar(props) {
    return (
    <div className="navbar">
        <div className="navbar-left">
            <h1 className="navbar-title">Panorama Digest</h1>
            <div className="navbar-line"></div>
            
            <div className="navbar-categories">
                <Link to="/category/general" className="navbar-item">General</Link>
                <Link to="/category/business" className="navbar-item">Business</Link>
                <Link to="/category/entertainment" className="navbar-item">Entertainment</Link>
                <Link to="/category/health" className="navbar-item">Health</Link>
                <Link to="/category/sports" className="navbar-item">Sports</Link>
                <Link to="/category/technology" className="navbar-item">Technology</Link>
                <Link to="/category/science" className="navbar-item">Science</Link>
            </div>
        </div>
        <div className="navbar-links">
            {/* <a className="navbar-item" href="/about">PORTFO</a> */}
            <a className="navbar-item" href="https://github.com/sdhrrr" target="_blank" rel="noreferrer">GITHUB</a>
        </div>
    </div>
    );
}

export default NavBar;
