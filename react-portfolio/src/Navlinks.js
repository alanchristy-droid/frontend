import React from "react";
import Header from "./Header";

export default function Navlinks(props){
    return(
        <nav className="navbar-list">
        <ul className="main-page">
            <Header url="#Portfolio" name="Alan" id="main-page"/>
        </ul>
        <ul className="more-content">
            <Header url="#Contact" name="Contact" id="more-content" />
            <Header url="#About" name="About" id="more-content"/>
            <Header url="#Work" name="Work" id="more-content"/>
            <Header url="#Blog" name="Blog" id="more-content"/>
        </ul>
        </nav>
    )
}