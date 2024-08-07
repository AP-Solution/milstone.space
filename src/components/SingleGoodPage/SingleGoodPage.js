import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import './SingleGoodPage.scss';

export const SingleGoodPage = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    const [id, setId] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    const { goodId } = useParams();

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
        console.log(goodId);
    }, []);

    // const data2 = {
    //     idNumber: goodId + '2',
    //     images: [
    //         'https://images.prom.ua/5750724556_w640_h640_monitor-upravleniya-bpla.jpg'
    //     ],
    //     title: 'Монітор керування БПЛА',
    //     subtitle: 'Побачити, аби влучно вжалити',
    //     price: 53000,
    //     received: 1200,
    //     properties: {
    //         'Виробник': 'Tochka U (Україна)',
    //         'Монітор': 'Sibolan 18.5"" FullHD IPS',
    //         'Відеочастоти': '1.3 GHz та 5.8 GHz',
    //         'Частоти на керування': '915 MHz або 750 MHz або 990 MHz',
    //         'Автономне живлення': '6s2p, 2x8400 mAh ',
    //         'Антени на відео RHCP': 'Helix 5.8 GHz, TrueRC Gatling 1.3 GHz',
    //         'Антена на керування': 'Line-Air 900 MHz або Yagi 750 MHz',
    //     },
    // };

    const data = {
        idNumber: goodId,
        images: [
            'https://images.prom.ua/5937874430_w640_h640_fpv-retranslyator-dlya.jpg',
            'https://images.prom.ua/5937874398_w640_h640_fpv-retranslyator-dlya.jpg',
            'https://images.prom.ua/5937874431_w640_h640_fpv-retranslyator-dlya.jpg'
        ],
        title: 'Ретранслятор сигналу FPV дронів',
        subtitle: 'Для далеких та безпечних польотів',
        price: 33000,
        received: 7500,
        properties: {
            'Виробник': 'Crossfire (Україна)',
            'Вага': '400г',
            'К-сть акумуляторів': '2',
            'К-сть каналів': '72',
            'RF чутливість': '-98dBm',
            'Частота відео': '5.8 ГГц',
            'Антена відео прийому': 'від 3 до 17 dbi',
            'Діапазон роботи': '17км',
            'Час роботи': '40хв',
            'Повна вартість': '33.000 ₴'
        },
        url: 'https://prom.ua/ua/p2243283202-fpv-retranslyator-dlya.html'
    }

    return (
        <div className="single-good-page">
            <h1>ID: {goodId}</h1>
            <div className='single-good-page__wrapper'>
                <h1 className='single-good-page__title'>
                    {data.title}
                </h1>

                <h2 className='single-good-page__subtitle'>
                    {data.subtitle}
                </h2>

                <div className='single-good-page__info'>
                    <div className='slider'>
                        <div className="slider__container">
                            <Slider
                                autoplay={true}
                                autoplaySpeed={3000}

                                asNavFor={nav2}
                                ref={slider => (sliderRef1 = slider)}
                                arrows={true}
                                className='slider__1'
                            >
                                {data.images.map((item, index) => (
                                    <div className='slider__1-slide' key={index}>
                                        <img
                                            src={item}
                                            className='slider__1-image'
                                            alt='slide'
                                        />
                                    </div>
                                ))}
                            </Slider>
                            <Slider
                                variableWidth={true}
                                arrows={false}
                                asNavFor={nav1}
                                ref={slider => (sliderRef2 = slider)}
                                swipeToSlide={true}
                                focusOnSelect={true}
                                slidesToShow={2}
                                className='slider__2'
                                responsive={[
                                    {
                                        breakpoint: 1024,
                                        settings: {
                                            slidesToScroll: 3,
                                        }
                                    },
                                    {
                                        breakpoint: 600,
                                        settings: {
                                            slidesToShow: 2,
                                            slidesToScroll: 2,
                                            initialSlide: 2
                                        }
                                    },
                                    {
                                        breakpoint: 480,
                                        settings: {
                                            slidesToShow: 2,
                                            slidesToScroll: 1
                                        }
                                    }
                                ]}
                            >
                                {data.images.map((item, index) => (
                                    <div className='slider__2-slide' key={index}>
                                        <img
                                            src={item}
                                            className='slider__2-image'
                                            alt='slide'
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    <div className='single-good-page__description'>
                        <table className='single-good-page__table'>
                            <tbody>
                                {
                                    Object.keys(data.properties).map((key, index) => (
                                        <tr className='single-good-page__table-row' key={index}>
                                            <td className='single-good-page__table-cell'>{key}</td>
                                            <td className='single-good-page__table-cell'>{data.properties[key]}</td>
                                        </tr>
                                    ))}
                                {/* <tr className='single-good-page__table-row'>
                                    <td className='single-good-page__table-cell'>Виробник</td>
                                    <td className='single-good-page__table-cell'>Crossfire (Україна)</td>
                                </tr>

                                <tr className='single-good-page__table-row'>
                                    <td className='single-good-page__table-cell'>Вага</td>
                                    <td className='single-good-page__table-cell'>400г</td>
                                </tr>

                                <tr className='single-good-page__table-row'>
                                    <td className='single-good-page__table-cell'>К-сть акумуляторів</td>
                                    <td className='single-good-page__table-cell'>2</td>
                                </tr>

                                <tr className='single-good-page__table-row'>
                                    <td className='single-good-page__table-cell'>К-сть каналів</td>
                                    <td className='single-good-page__table-cell'>72</td>
                                </tr>

                                <tr className='single-good-page__table-row'>
                                    <td className='single-good-page__table-cell'>RF чутливість</td>
                                    <td className='single-good-page__table-cell'>-98dBm</td>
                                </tr>

                                <tr className='single-good-page__table-row'>
                                    <td className='single-good-page__table-cell'>Частота відеозв'язку</td>
                                    <td className='single-good-page__table-cell'>5.8 ГГц</td>
                                </tr>

                                <tr className='single-good-page__table-row'>
                                    <td className='single-good-page__table-cell'>Антена відео прийому</td>
                                    <td className='single-good-page__table-cell'>від 3 до 17 dbi</td>
                                </tr>

                                <tr className='single-good-page__table-row'>
                                    <td className='single-good-page__table-cell'>Діапазон роботи</td>
                                    <td className='single-good-page__table-cell'>17км</td>
                                </tr>

                                <tr className='single-good-page__table-row'>
                                    <td className='single-good-page__table-cell'>Час роботи</td>
                                    <td className='single-good-page__table-cell'>40хв</td>
                                </tr>

                                <tr className='single-good-page__table-row'>
                                    <td className='single-good-page__table-cell'>Повна вартість</td>
                                    <td className='single-good-page__table-cell'>33.000 ₴</td>
                                </tr> */}

                                <tr className='single-good-page__table-row'>
                                    <td className='single-good-page__table-cell'>Посилання на продавця</td>
                                    <td className='single-good-page__table-cell'>
                                        <a
                                            href={data.url}
                                            target='_blank'
                                            noreferer="true"
                                            rel='noopener noreferrer'
                                        >
                                            Відкрити
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <hr />
                        Ретранслятор допомагає пташкам літати далі, отримувати якісне відео в реальному часі, а найголовніше - дає пілоту змогу керувати дроном подалі від лінії бойового зіткнення.
                    </div>


                </div>

                <div className='single-good-page__gathering'>
                    <h3 className='single-good-page__gathering-title'>
                        Триває збір
                    </h3>

                    <div className='single-good-page__gathering-wrapper'>
                        <progress
                            className='single-good-page__gathering-progress'
                            max={data.price}
                            value={data.received}
                        >
                        </progress>

                        <span className='single-good-page__gathering-progress__value'>
                            {data.received} / {data.price} ₴
                        </span>
                    </div>
                </div>
            </div>
        </div >
    )
}