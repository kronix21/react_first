import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../pages/Home';
import Reg from '../pages/Reg';
import Service from '../pages/Service';
import SignIn from '../pages/SignIn';
import Help from '../pages/Help';
import Request from '../pages/Request';
import Profile from '../pages/Profile';

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to='/home' />} />
            <Route path="/home" element={<Home />} />
            <Route path="/service" element={<Service />} />
            <Route path="/reg" element={<Reg />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/help" element={<Help />} />
            <Route path="/request" element={<Request />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    )
};

export default Routers;