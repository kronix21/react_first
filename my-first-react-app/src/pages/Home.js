import React from 'react';
import { Link } from "react-router-dom";
import Flash from "./../components/image/free-icon-flash-252590.png"
import Accesibility from "./../components/image/free-icon-accesibility-2778901.png"
import Lock from "./../components/image/free-icon-rectangular-closed-padlock-lock-interface-symbol-45486.png"
import './../scss/_home.scss';
import { useAuth } from '../context/AuthContext';

 function Home() {
    const { isAuthenticated } = useAuth();
   return (
     <div className="home-page">
        <title>ГосударьУслуги - Главная</title>
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-title">Государственные услуги в <span className="highlight"> одном клике</span></h1>
                    <p className="hero-subtitle">Просто. Быстро. Без очередей. Ваш персональный помощник в решении любых вопросов с государством</p>
                    <div className="hero-cta">
                        {isAuthenticated ? (
                            <button className="btn btn-primary"><Link to={"/service"}>Начать пользоваться</Link></button>
                        ) : (
                            <button className="btn btn-primary"><Link to={"/signIn"}>Начать пользоваться</Link></button>
                        )}
                    </div>
                </div>
                
                <div className="hero-stats">
                    <div className="stat">
                        <p className="stat-number">1.5M+</p>
                        <p className="stat-label">пользователей</p>
                    </div>
                    <div className="stat">
                        <p className="stat-number">245+</p>
                        <p className="stat-label">онлайн-сервисов</p>
                    </div>
                    <div className="stat">
                        <p className="stat-number">98%</p>
                        <p className="stat-label">удовлетворенных</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="mission">
            <div className="container">
                <h1 className="section-title">Наша миссия</h1>
                <p className="mission-text">
                    Мы создаем цифровую среду, в которой каждый гражданин может 
                    решить любые вопросы с государством быстро, просто и без лишних 
                    хлопот. Наша цель — сделать взаимодействие с государственными 
                    органами таким же удобным, как онлайн-покупки.
                </p>
                
                <div className="values">
                    <div className="value-card">
                        <img src = { Flash } className="value-icon" alt=''/>
                        <h1>Скорость</h1>
                        <p>Среднее время решения вопроса — 15 минут вместо 15 дней</p>
                    </div>
                    <div className="value-card">
                        <img src = { Lock } className="value-icon" alt=''/>
                        <h1>Безопасность</h1>
                        <p>Защита данных по стандартам государственной безопасности</p>
                    </div>
                    <div className="value-card">
                        <img src = { Accesibility } className="value-icon" alt=''/>
                        <h1>Доступность</h1>
                        <p>Понятный интерфейс и поддержка 24/7</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="how-it-works">
            <div className="container">
                <h2 className="section-title">Как работает платформа</h2>
                
                <div className="steps">
                    <div className="step">
                        <div className="step-number">1</div>
                        <h1>Выбираете нужную услугу</h1>
                        <p>Найдите нужный сервис через поиск или каталог</p>
                    </div>
                    <div className="step">
                        <div className="step-number">2</div>
                        <h1>Заполняете форму онлайн</h1>
                        <p>Все поля заполняются автоматически из вашего профиля</p>
                    </div>
                    <div className="step">
                        <div className="step-number">3</div>
                        <h1>Отслеживаете статус</h1>
                        <p>В реальном времени следите за этапами рассмотрения</p>
                    </div>
                    <div className="step">
                        <div className="step-number">4</div>
                        <h1>Получаете результат</h1>
                        <p>Готовые документы приходят напрямую в личный кабинет</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
   )
 }

 export default Home