import React from 'react';
import './../scss/_profile.scss';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

 function Profile() {
    const { user, loading, logout } = useAuth();
    const navigate = useNavigate();

    if (loading) return <div>Загрузка...</div>;
    if (!user) return <Navigate to="/" replace />;

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <div className="profile-page">
          <title>ГосударьУслуги - Личный кабинет</title>
            <div className="container">
                <h1>Личный кабинет</h1>
                <div className="card">
                    <div className="info-item">
                        <strong>Фамилия:</strong> <span>{user.surname}</span>
                    </div>
                    <div className="info-item">
                        <strong>Имя:</strong> <span>{user.name}</span>
                    </div>
                    <div className="info-item">
                        <strong>Отчество:</strong> <span>{user.lastname}</span>
                    </div>
                    <div className="info-item">
                        <strong>Email:</strong> <span>{user.email}</span>
                    </div>
                </div>

                <button className="logout-btn" onClick={handleLogout}>
                    Выйти
                </button>
            </div>
        </div>
    );
 }

 export default Profile;