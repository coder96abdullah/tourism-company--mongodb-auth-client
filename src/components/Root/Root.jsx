
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Root = () => {
    return (
        <div>
            <div className='max-w-[1240px] mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>  
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;