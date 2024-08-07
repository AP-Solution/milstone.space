import React, { useState, useEffect } from 'react';
import './Header.scss';
import cn from 'classnames';
import { HeaderLogo } from './HeaderLogo/HeaderLogo';
import { HeaderNav } from './HeaderNav/HeaderNav';
import { HeaderBurger } from './HeaderBurger/HeaderBurger';

export const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isBurgerActive, setIsBurgerActive] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={cn('header', {
            'scrolled': scrolled
        })}>
            <div className='header__wrapper'>
                <HeaderLogo />
                <HeaderNav
                    isMenuOpen={isBurgerActive}
                    setIsMenuOpen={setIsBurgerActive}
                />
                <HeaderBurger
                    isBurgerActive={isBurgerActive}
                    setIsBurgerActive={setIsBurgerActive}
                />

                <a
                    className='header__logo-tg__link'
                    href='https://t.me/+ocXNb7y2sI1kMTYy'
                    target="_blank"
                    rel="noreferrer"
                >
                    <img
                        src="./images/tg.png"
                        alt="tg"
                        className="header__logo-tg__image"
                    />
                </a>
            </div>
        </header>
    );
}