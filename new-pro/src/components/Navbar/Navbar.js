import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";
import logo from '../../assets/photos/logo_icon.png';


function Navbar(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    return(
        <header className="flex-row px-1">
            <nav id="navBar">
            <a data-testid="link" href="/">
                    <span role="img" aria-label="logo"><img id="nav-logo" src= {logo} /></span>
                </a>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li className={`mx-1 ${
                            currentCategory.name === category.name && 'navActive'
                        }`} key={category.name}>
                            <span onClick={() => {setCurrentCategory(category)}}>{capitalizeFirstLetter(category.name)}</span>

                        </li>
                    ))}
                    <li></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;