import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = ({links}) => {
    return (
        <nav className='nav-bar'>
            <h1>Dev Mountain Docs</h1>
            <ul className='nav-bar-links'>
            {links.map((link, id) => {
                return <li key={id}><Link to={`/${link}`}>{link}</Link></li>
            })}
            </ul>
        </nav>
    )
}

export default Nav;