import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./image/emblem_black.svg"
import '../scss/_header.scss'
import { useAuth } from '../context/AuthContext';

const Header = () => {
    const navigate = useNavigate();
    const { isAuthenticated, logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate('/');
    };
    return (
        <>
        <div className="header-block">
            <div className="header">
                <Link to={"/home"} className="logo">
                    <div><img src= {Logo} alt="Logo" /></div>
                    <p><span>государь</span> услуги</p>
                </Link>
                <nav className='navigation-menu '>
                    <Link to={"/service"}>Услуги</Link>
                    <Link to={"/help"}>Помощь</Link>
                    {isAuthenticated ? (
                    <>
                        <Link to={"/request"}>Заявления</Link>
                        <Link to="/profile">Личный кабинет</Link>
                        <Link to='/' onClick={handleLogout}>Выйти</Link>
                    </>
                    ) : (
                    <Link to="/signIn">Войти</Link>
                    )}
                </nav>
            </div>
        </div>
        </>
    );
};

export default Header;
