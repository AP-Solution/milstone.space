import React from 'react';
import './HeaderLogo.scss';
import { Link } from 'react-router-dom';

export const HeaderLogo = () => {
    return (
        <Link
            to="/"
            className='header__logo'
            onClick={() => window.scrollTo(0, 0)}
        >
            <img src="./images/logo.png" alt="logo" className="header__logo-image" />
            <h2 className='header__logo-title'>MILSTONE</h2>
        </Link>
    );
}