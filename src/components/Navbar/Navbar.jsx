import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <header className="navbar">
            <h2 className="logo">Logo</h2>
            <nav className="navigation">
                <a href="#">Home<span></span></a>
                <a href="#">About<span></span></a>
                <a href="#">Service<span></span></a>
                <a href="#">Contact<span></span></a>
            </nav>
        </header>
    )
}

export default Navbar;