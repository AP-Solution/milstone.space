import React, { useEffect, useState, useRef } from 'react';
import './Main.scss';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

export const Main = () => {
    const [dateString, setDateString] = useState(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        className: 'test__slider',
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };



    const padZero = (num) => {
        return num < 10 ? `0${num}` : num;
    };

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const hours = padZero(now.getHours());
            const minutes = padZero(now.getMinutes());
            const seconds = padZero(now.getSeconds());
            const timeString = `${hours}:${minutes}:${seconds}`;

            setDateString(timeString);
        };

        updateTime(); // Initial call to set the state immediately
        const intervalId = setInterval(updateTime, 1000); // Update the time every second
        return () => clearInterval(intervalId); // Clear interval on component unmount
    }, []);

    return (
        <section className="main">
            <div className="main__wrapper">
                <div className="main__timebox">{dateString}</div>

                <div className="main__welcome">
                    <h2 className='main__welcome-title'>
                        Спільнота людей, які рухають світ
                    </h2>

                    <h3 className='main__welcome-subtitle'>
                        Великими і дрібними справами
                    </h3>
                </div>

                <div className='main__manifest'>
                    <Link
                        to='/services/delivery/compact'
                        className='main__manifest-button'
                    >
                        Замовити свіжі овочі
                    </Link>

                    <Link
                        to="/services/delivery/large"
                        className='main__manifest-button'
                    >
                        Перевезти вантаж
                    </Link>

                    <Link
                        to="/services/events/vacation"
                        className='main__manifest-button'
                    >
                        Організувати відпустку
                    </Link>

                    <Link
                        to="/store/earphones"
                        className='main__manifest-button'
                    >
                        Придбати навушники
                    </Link>

                    <Link
                        className='main__manifest-button'
                        to="/services/haircut"
                    >
                        Оновити зачіску
                    </Link>

                    <Link
                        className='main__manifest-button'
                        to="/services/website"    
                    >
                        Створити сайт
                    </Link>

                    <Link
                        className='main__manifest-button'
                        to="/support"    
                    >
                        Задонатити на ЗСУ
                    </Link>

                    <Link
                        className='main__manifest-button'
                        to="/services/walk-animal"    
                    >
                        Вигуляти улюбленця
                    </Link>

                    <Link
                        className='main__manifest-button'
                        to="/services/haircut"    
                    >
                        Більше пропозицій
                    </Link>
                </div>
            </div>

            <div className='test__wrapper'>
                <h2 className='test__title'>
                    Маємо на часі
                </h2>

                <Slider {...settings}>
                    <div className='testgit __slide'>
                        <div className='test__slide-info'>
                            <img src="../../images/lake.jpg" />
                            <h2 className='test__slide-subtitle'>
                                Порятунок озера Синє на виноградарі
                            </h2>

                            <div className='test__slide-description'>
                                Ще до недавніх пір тут було значно більше води. Зараз же - водойма майже висохла, а на її дні проросли бур'яни та очерет.
                                Хто в цьому винен і чому так сталося - мають розбиратися інші люди. Ми ж вважаємо що воно не повинне повторити долю Каховського водосховища і докладемо можливих зусиль, аби тут все було краще ніж в ліпші часи.
                                <br />
                                <br />
                                Тому з Божою та Вашою допомогою плануємо як те екологічне неподобство виправити. Починаємо з консультацій екологів, визначаємо важкість ситуації.
                                <br />
                                <br />
                                <div className="test__slide-info">
                                    <h2>Фактори, що впливають на відновлення озера</h2>
                                    <ul>
                                        <li><strong>Розмір озера:</strong> Чим більше озеро, тим більше часу і ресурсів буде потрібно для його відновлення.</li>
                                        <li><strong>Причини висихання:</strong> Необхідно з'ясувати, чому озеро висохло. Це може бути викликано змінами клімату, надмірним використанням водних ресурсів, будівництвом гребель або іншими антропогенними факторами.</li>
                                        <li><strong>Кліматичні умови:</strong> У посушливих районах відновлення водних ресурсів може бути складнішим, ніж у регіонах з рясними опадами.</li>
                                        <li><strong>Екологічні фактори:</strong> Необхідно враховувати стан навколишньої екосистеми, включаючи рослинність, тваринний світ і якість ґрунту.</li>
                                        <li><strong>Технічні та інженерні рішення:</strong> Можуть знадобитися інженерні заходи, такі як будівництво гребель, каналів або систем зрошення.</li>
                                        <li><strong>Фінансові ресурси:</strong> Відновлення озера може вимагати значних фінансових вкладень для реалізації всіх необхідних заходів.</li>
                                        <li><strong>Підтримка місцевого населення та уряду:</strong> Важливо, щоб місцеве населення і влада були залучені і підтримували проєкт відновлення.</li>
                                    </ul>

                                    <h2>Приблизні терміни відновлення</h2>
                                    <ul>
                                        <li><strong>Короткострокові заходи (1-2 роки):</strong> Можуть включати термінове зрошення, переспрямування водних потоків або створення штучних водойм для швидкого наповнення озера.</li>
                                        <li><strong>Середньострокові заходи (3-5 років):</strong> Можуть включати заходи з покращення водозбірного басейну, посадку дерев і рослинності, які сприяють затримці води, а також створення інфраструктури для зберігання води.</li>
                                        <li><strong>Довгострокові заходи (5-10 років і більше):</strong> Включають комплексні заходи з відновлення екосистеми озера, стабілізації водного балансу і моніторингу екологічного стану.</li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className='test__slide-buttons'>
                            <button className='test__slide-button'>
                                Доєднатися
                            </button>

                            <button className='test__slide-button'>
                                Запропонувати
                            </button>

                            <button className='test__slide-button'>
                                Підтримати ₴
                            </button>
                        </div>
                    </div>

                    <div className='test__slide'>
                        <div className='test__slide-info'>
                            <img src="../../images/garbage.jpg" />
                            <h2 className='test__slide-subtitle'>
                                Лісове сміття у київській області
                            </h2>

                            <p className='test__slide-description'>
                                Явище не рідкісне, на привеликий жаль. Однак прибрати його - завжди гарна ідея, чим і будуть займатися добровольці з нашої спільноти за винагороду чи за покликом серця.
                                <br />
                                <br />
                                Для цього створюємо окремий телеграм-канал, де будемо ділитися ходом подій та пропозиціями.

                                Явище не рідкісне, на привеликий жаль. Однак прибрати його - завжди гарна ідея, чим і будуть займатися добровольці з нашої спільноти за винагороду чи за покликом серця.
                                <br />
                                <br />
                                Для цього створюємо окремий телеграм-канал, де будемо ділитися ходом подій та пропозиціями.
                            </p>
                        </div>

                        <div className='test__slide-buttons'>
                            <button className='test__slide-button'>
                                Доєднатися
                            </button>

                            <button className='test__slide-button'>
                                Маю пропозицію
                            </button>

                            <button className='test__slide-button'>
                                Донат
                            </button>
                        </div>
                    </div>

                    <div className='test__slide'>
                        <img src="../../images/lake.jpg" />
                        <div className='test__slide-info'>
                            <h2 className='test__slide-subtitle'>
                                Порятунок озера Синє на виноградарі
                            </h2>

                            <p className='test__slide-description'>
                                Ще до недавніх пір тут було значно більше води. Зараз же - водойма майже висохла, а на її дні проросли бур'яни та очерет.
                                Хто в цьому винен і чому так сталося - мають розбиратися інші люди. Ми ж вважаємо що воно не повинне повторити долю Каховського водосховища.
                                <br />
                                <br />
                                Що ж, з Божою та Вашою допомогою плануємо як те екологічне неподобство виправити.
                            </p>
                        </div>

                        <div className='test__slide-buttons'>
                            <button className='test__slide-button'>
                                Доєднатися
                            </button>

                            <button className='test__slide-button'>
                                Маю пропозицію
                            </button>

                            <button className='test__slide-button'>
                                Донат
                            </button>
                        </div>
                    </div>

                    <div className='test__slide'>
                        <img src="../../images/lake.jpg" />
                        <div className='test__slide-info'>
                            <h2 className='test__slide-subtitle'>
                                Порятунок озера Синє на виноградарі
                            </h2>

                            <p className='test__slide-description'>
                                Ще до недавніх пір тут було значно більше води. Зараз же - водойма майже висохла, а на її дні проросли бур'яни та очерет.
                                Хто в цьому винен і чому так сталося - мають розбиратися інші люди. Ми ж вважаємо що воно не повинне повторити долю Каховського водосховища.
                                <br />
                                <br />
                                Що ж, з Божою та Вашою допомогою плануємо як те екологічне неподобство виправити.
                            </p>
                        </div>

                        <div className='test__slide-buttons'>
                            <button className='test__slide-button'>
                                Доєднатися
                            </button>

                            <button className='test__slide-button'>
                                Маю пропозицію
                            </button>

                            <button className='test__slide-button'>
                                Донат
                            </button>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};