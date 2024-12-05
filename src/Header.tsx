import React, {useState} from 'react';
import './App.css';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {

    
    return (
        <header className='header'>
            <h1>デジタル時計</h1>
            <HamburgerMenu />
        </header>
    )
}

export default Header;