import React from 'react';
import './SwipeSection.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-cards';

export const SwipeSection = () => {
    return (
        <div className="swipesection">
            <div className='blur-mask'></div>
            <h2 className="swipesection__title">
                SwipeSection
            </h2>

            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className="swiper"
            >
                <SwiperSlide className='swiper__slide'>Slide 1</SwiperSlide>
                <SwiperSlide className='swiper__slide'>Slide 2</SwiperSlide>
                <SwiperSlide className='swiper__slide'>Slide 3</SwiperSlide>
                <SwiperSlide className='swiper__slide'>Slide 4</SwiperSlide>
                <SwiperSlide className='swiper__slide'>Slide 5</SwiperSlide>
                <SwiperSlide className='swiper__slide'>Slide 6</SwiperSlide>
                <SwiperSlide className='swiper__slide'>Slide 7</SwiperSlide>
                <SwiperSlide className='swiper__slide'>Slide 8</SwiperSlide>
                <SwiperSlide className='swiper__slide'>Slide 9</SwiperSlide>
            </Swiper>
        </div>
    );
}