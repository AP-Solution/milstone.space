import React from 'react';
import './ErrorPage.scss';

export const ErrorPage = () => {
    return (
        <div className="error-page">
            <h1 className="error-page__title">404</h1>
            <h2 className="error-page__subtitle">Сторінка не знайдена</h2>
        </div>
    );
}