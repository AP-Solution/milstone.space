import React from 'react';
import './HeaderNav.scss';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

export const HeaderNav = ({ isMenuOpen, setIsMenuOpen }) => {
    const navData = [
        {
            title: 'Головна',
            link: '/'
        },
        {
            title: 'Магазин',
            link: '/store'
        },
        {
            title: 'Послуги',
            link: '/services'
        },
        {
            title: 'Добродія',
            link: '/dobrodiya'
        },
        {
            title: 'Підтримка ЗСУ',
            link: '/support'
        },
        {
            title: 'Про нас',
            link: '/about'
        },
    ];

    return (
        <nav className={cn('header__nav', {
            'active': isMenuOpen
        })}>
            <ul className='header__nav-list'>

                {navData.map((item, index) => (
                    <li
                        key={index}
                        className='header__nav-item'
                    >
                        <NavLink
                            to={item.link}
                            className={({ isActive, isPending }) =>
                                `header__nav-link ${isActive ? 'active' : ''} ${isPending ? 'pending' : ''}`
                            }
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav >
    )
}