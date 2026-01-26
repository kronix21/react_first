import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './../scss/_signin.scss'
import { useAuth } from '../context/AuthContext';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password || password.length < 6) {
            setError('Проверьте введённые данные');
            return;
        }

        const savedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const user = savedUsers.find(u => u.email === email && u.password === password);

        if (user) {
          const userData = {
            id: Date.now(), 
            name: user.name,
            email: user.email,
            surname: user.surname,
            lastname: user.lastname,
            fullName: user.fullName,
          };
          const token = user.token;
      
          login(userData, token);
          navigate('/');
        } else {
          setError('Неверный email или пароль');
        }
    };

    return (
        <div className='login-block'>
          <title>ГосударьУслуги - Вход</title>
            <h2>Вход</h2>
            <p className='img-z'>Z</p>
            {error && <p style={{ color: 'red', marginBottom:'15px' }}>{error}</p>}
            <form onSubmit={handleSubmit} className='form-login'>
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
                <button className='login-btn'>Войти</button>
            </form>
            <p className='qestion-login'>
                Нет аккаунта?
                <a href="/reg"> Зарегистрироваться</a>
            </p>
        </div>
    );
};

export default SignIn;