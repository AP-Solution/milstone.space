import React from 'react';
import './HeaderBurger.scss';
import cn from 'classnames';

export const HeaderBurger = ({ isBurgerActive, setIsBurgerActive}) => {
    return (
        <div
            className={cn('header__burger', {
                'active': isBurgerActive
            })}
            onClick={() => setIsBurgerActive(!isBurgerActive)}
        >
            <span className='header__burger-line'></span>
        </div>
    )
}