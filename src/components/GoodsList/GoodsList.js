import React, { useState, useEffect } from 'react';
import './GoodsList.scss';

// import { GoodsFilter } from '../GoodsFilter/GoodsFilter';

export const GoodsList = ({ category, goodsList, inputFilter }) => {
    const [shownGoods, setShownGoods] = useState(goodsList);
    const [searchInput, setSearchInput] = useState('');

    useEffect(() => {
        if (category === 'Усі пропозиції') {
            setShownGoods(goodsList);
        } else {
            setShownGoods(goodsList.filter(good => good.tagsList?.includes(category)));
        }
    }, [category]);

    useEffect(() => {
        if (inputFilter === '') {
            setShownGoods(goodsList);
        } else {
            setShownGoods(goodsList.filter(good =>
                good.name
                    .toLowerCase()
                    .includes(inputFilter
                        .toLowerCase()
                    )
            ));
        }
    }, [inputFilter]);

    useEffect(() => {
        let uniquesTags = goodsList.map(
            good => good.tagsList
        );
        console.log([...new Set(uniquesTags.flat().sort((a, b) => a.localeCompare(b)))]);
    }, []);

    return (
        <div className='goods'>
            <ul className='goods__list'>
                {shownGoods.map(good => (
                    <li
                        key={good.id}
                        className="goods__item"
                    >
                        <img
                            src={good.image}
                            className="goods__item-image"
                            alt={good.name}
                        />

                        <h2 className="goods__item-title">
                            {good.name}
                        </h2>

                        <p className="goods__item-price">
                            {good.price} ₴
                        </p>

                        <div className="goods__item-actions">
                            <button
                                className="goods__item-button"
                                onClick={(e) => window.location.href = `/#/store/${good.id}`}
                            >
                                Детальніше
                            </button>

                            <button
                                className="goods__item-button"
                            >
                                У кошик
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
