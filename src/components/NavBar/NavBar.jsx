import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

export default function NavBar() {
    return (
        <header className="navbar">
                <Link to='/'><p className='aHome'> CineMap </p></Link>
            <nav>
                <ul className="list">
                    <li className="list-item">
                        <NavLink to="/Catalogue" >Catalogue</NavLink>
                        <NavLink to="/Favorites" >Favorites</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}