import { useLocation } from 'react-router-dom';
import Routers from '../routes/Routers';
import Header from './header';
import Footer from './footer';

const Layout = () => {
    const location = useLocation();
    const hideLayout = ['/signIn', '/reg', '/form'].includes(location.pathname);

    return (
        <>  
            { !hideLayout && <Header /> } 
            <div>
                <Routers />
            </div>
           { !hideLayout && <Footer /> } 
        </>
    )
};

export default Layout;