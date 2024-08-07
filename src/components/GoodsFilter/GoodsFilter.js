import React from 'react';
import './GoodsFilter.scss';

export const GoodsFilter = ({ setCategory, setSearchInput, searchInput }) => {
    return (
        <div className='goods__filter'>
            <h4 className='goods__filter-title'>Оберіть цікаве </h4>
            <select
                className='goods__filter-select'
                name="category"
                id="category"
                defaultValue="Все"
                onChange={e => setCategory(e.target.value)}
            >
                <option>Усі пропозиції</option>
                <option>Дім та сад</option>
                <option>Будівництво та ремонт</option>
                <option>Спорт і відпочинок</option>
                <option>Краса та догляд</option>
                <option>Тактичне спорядження</option>
                <option>Творчість та розваги</option>
                <option>Електроніка</option>
                <option>Для дітей</option>
            </select>

            <div className='goods__filter-search'>
                <input
                    className='goods__filter-input'
                    placeholder='Пошук...'
                    type='text'
                    name='search'
                    id='search'
                    value={searchInput}
                    onChange={e => {
                        setSearchInput(e.target.value);
                    }}
                />
            </div>
        </div>
    )
}