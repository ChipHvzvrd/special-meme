import React from "react";
import logo from '../../photos/logo_icon.png';

const categories = [
    {
        name: "Websites",
        description:
        "Photos of websites that I have built",
    },
    {
        name:"Technologies",
        description:
        "Technologies I use in development",
    },
    {
        name:"Experience",
        description:
        "Previous Experience",
    }
]

function Navbar() {

    function categorySelected(name) {
        console.log(`${name} clicked`)
    }

    return(
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="logo"><img id="nav-logo" src= {logo} /></span>
                </a>
            </h2>
            <nav id="navBar">
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
                        <li className="mx-1" key={category.name}>
                            <span onClick= {() => categorySelected(category.name)}>{category.name}</span>
                            </li>
                    ))}
                    <li></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;