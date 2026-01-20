import React from "react";
import { Link } from "react-router-dom";
import "../scss/_footer.scss";
import Logo from "./image/emblem_black.svg"
import logoVk from "./image/vk.png";
import logoRutube from "./image/Icon_RUTUBE_dark_color.png";
import logoTelegram from "./image/telegram.png";
import { useAuth } from '../context/AuthContext';

const Footer = () => {
    const { isAuthenticated } = useAuth();
    return (
        <>
            <section className="footer">
                <div className="footer-indent">
                    <div className="logo">
                        <img src= {Logo} alt="Logo" />
                        <p><span>государь</span> услуги</p>
                    </div>
                    <nav className='menu-footer'>
                        {isAuthenticated ? (
                            <>
                                <Link to={"/profile"}>Личный кабинет</Link>
                                <Link to={"/service"}>Услуги</Link>
                            </>
                        ) : (
                            <>
                                <Link to={"/signIn"}>Личный кабинет</Link>
                                <Link to={"/signIn"}>Услуги</Link>
                            </>
                        )}
                        <Link to={"/reg"}>Регистрация</Link>
                        
                        <Link to={"/help"}>Помощь</Link>
                    </nav>
                    <div className="contact-info">
                        <div className="goverAgency">
                            <p>
                                Контакты МФЦ:<br />
                                <span>8-800-100-70-10</span>
                            </p>
                        </div>
                        <div className="goverAgency">
                            <p style={{width: 280}}>
                                Контакты Пенсионного фонда:<br />
                                <span>8-800-302-2-302</span>
                            </p>
                        </div>
                    </div>
                    <div className="social-icon">
                        <Link to="https://vk.com" >
                            <img src= {logoVk} alt="Logo" />
                        </Link>
                        <Link to="https://web.telegram.org" >
                            <img src= {logoRutube} alt="Logo" />
                        </Link>
                        <Link to="https://rutube.ru" >
                            <img src= {logoTelegram} alt="Logo" />
                        </Link>
                    </div>
                    </div>
            </section>
        </>
    );
};

export default Footer;