import React, { useState } from 'react';
import './Store.scss';

import { GoodsList } from '../GoodsList/GoodsList';
import { storeSettings } from './storeSettings';
import { GoodsFilter } from '../GoodsFilter/GoodsFilter';

export const Store = () => {
    const [category, setCategory] = useState('Усі пропозиції');
    const [searchInput, setSearchInput] = useState('');

    return (
        <div className='store'>
            <div className='store__wrapper'>
                <h1 className='store__title'>
                    Популярні новинки
                </h1>

                <GoodsFilter
                    setCategory={setCategory}
                    setSearchInput={setSearchInput}
                    searchInput={searchInput}
                />

                <GoodsList
                    category={category}
                    goodsList={storeSettings.goodsList}
                    inputFilter={searchInput}
                />
            </div>
        </div>
    )
}