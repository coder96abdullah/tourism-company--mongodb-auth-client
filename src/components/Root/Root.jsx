
import { Outlet } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Navbar0 from '../Navbar/Navbar0';

const Root = () => {
    return (
        <div>
            <div className='max-w-[1240px] mx-auto'>
            <Navbar0></Navbar0>
            <Outlet></Outlet>  
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;