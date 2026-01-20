import { createContext, useContext, useState, useEffect } from 'react';
const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        try {
            const token = localStorage.getItem('authToken');
            const userDataStr = localStorage.getItem('user');

            if (token && userDataStr) {
                const userData = JSON.parse(userDataStr);
                if (userData && typeof userData === 'object' && userData.email) {
                    setIsAuthenticated(true);
                    setUser(userData);
                }
            }
        } catch (err) {
            console.error('Ошибка при восстановлении сессии:', err);
        } finally {
            setLoading(false); 
        }
    }, []);

    const login = (userData, token) => {
        localStorage.setItem('authToken', token);
        localStorage.setItem('user', JSON.stringify(userData));
        setIsAuthenticated(true);
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        setIsAuthenticated(false);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, loading, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};