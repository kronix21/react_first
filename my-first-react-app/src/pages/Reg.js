import './../scss/_signin.scss'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

const Reg = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); 

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !email || !password || !confirmPassword || !surname || !lastname) {
            setError('Пожалуйста, заполните все поля');
            return;
        }

        if (password.length < 6) {
            setError('Пароль должен быть не менее 6 символов');
            return;
        }

        if (password !== confirmPassword) {
            setError('Пароли не совпадают');
            return;
        }

        const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const token = Math.random().toString(36).substring(2);

        const newUser = {
            name,
            surname,
            lastname,
            email,
            password, 
            fullName: `${surname} ${name} ${lastname}`.trim(),
            token,
        };

        const updatedUsers = [...savedUsers, newUser];
        localStorage.setItem('users', JSON.stringify(updatedUsers));

        const usData = {
          id: Date.now(),
          name,
          surname,
          lastname,
          fullName: newUser.fullName,
          email,
        };

        login(usData, token);

        navigate('/signIn');
    };

    return (
        <div className='login-block' style={{ height: '700px' }}>
          <title>ГосударьУслуги - Регистрация</title>
            <h2>Регистрация</h2>
            {error && <p style={{ color: 'red', marginBottom:'15px' }}>{error}</p>}
            <form onSubmit={handleSubmit} style={{ height: '500px' }}>
                <div className='input-login'>
                    <input
                        type="text"
                        value={surname}
                        placeholder=" "
                        onChange={(e) => setSurname(e.target.value)}
                        required
                    />
                    <label>Фамилия:</label>
                </div>
                <div className='input-login'>
                    <input
                        type="text"
                        value={name}
                        placeholder=" "
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <label>Имя:</label>
                </div>
                <div className='input-login'>
                    <input
                        type="text"
                        value={lastname}
                        placeholder=" "
                        onChange={(e) => setLastname(e.target.value)}
                        required
                    />
                    <label>Отчество:</label>
                </div>
                <div className='input-login'>
                    <input
                        type="email"
                        value={email}
                        placeholder=" "
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <label>Email:</label>
                </div>
                <div className='input-login'>
                    <input
                        type="password"
                        value={password}
                        placeholder=" "
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <label>Пароль:</label>
                </div>
                <div className='input-login'>
                    <input
                        type="password"
                        value={confirmPassword}
                        placeholder=" "
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <label>Подтвердите пароль:</label>
                </div>
                <button type="submit">Зарегистрироваться</button>
            </form>
            <p className='qestion-login'>
                Уже есть аккаунт?
                <a href="/signIn" style={{ color: '#007bff' }}> Войти</a>
            </p>
        </div>
    );
};

export default Reg;