import React from 'react';
import './header.css';

export default function Header() {
    return(
        <header>
            <div className="header--logo">
                <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png" alt="Netlfix"/>
                </a>
            </div>
        </header>
    )
}