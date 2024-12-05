import React, { useState } from 'react';
import './styles/HamburgerMenu.css';
import './App.css';

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
    <div className='hamburger-menu'>
        <button className="hamburger" onClick={toggleMenu}>
            <div className={`hamburger-line ${isOpen ? 'open' : ''} `}></div>
        </button>
        <nav className={`menu ${isOpen ? 'open' : ''}`}>
            <ul id="settings" className="menu-list">
                <li data-display="ampm">
                    <p>AM/PM</p>
                    <label className="toggle-button">
                        <input type="checkbox"/>
                    </label>
                </li>
                <li data-display="seconds">
                    <p>秒表示</p>
                    <label className="toggle-button">
                        <input type="checkbox"/>
                    </label>
                </li>
                <li data-display="date">
                    <p>日付表示</p>
                    <label className="toggle-button">
                        <input type="checkbox"/>
                    </label>
                </li>
            </ul>
        </nav>
    </div>
    
    )
}

export default HamburgerMenu;