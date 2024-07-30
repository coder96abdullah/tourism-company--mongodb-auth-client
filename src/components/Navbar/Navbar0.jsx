import { Link, NavLink } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../Provider/Provider";
import 'animate.css';

const Navbar0 = () => {
  const {user,logOut}=useContext(AuthContext);
  const handleSignout=()=>{
   logOut()
   .then()
   .catch()
  }
  const nav=<>
  <NavLink to='/'><li className='font-semibold text-gray-600 text-lg'><a>Home</a></li></NavLink>
  <NavLink to='/allTouristSpot'><li className='font-semibold text-gray-600 text-lg'><a>All Tourists Spot</a></li></NavLink>
  <NavLink to='/AddTouristSpot'><li className='font-semibold text-gray-600 text-lg'><a>Add Tourists Spot</a></li></NavLink>
  <NavLink to='/myList'><li className='font-semibold text-gray-600 text-lg'><a>My List</a></li></NavLink>
  <NavLink to='/countries'><li className='font-semibold text-gray-600 text-lg'><a>Add Country</a></li></NavLink> 
 </>
    return (
        <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {nav}
      </ul>
    </div>
    <a className=" btn btn-ghost text-3xl font-bold"><span className='text-red-900'>World</span> <span className='text-green-900'>View</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {nav}
    </ul>
  </div>
  <div className="navbar-end">
  {
      user?
      <button onClick={handleSignout} className="btn btn-accent ">Sign Out</button>
      :
      <>
       <Link to='/login'>
         <button className="btn btn-warning">Log In</button>
      </Link>
      <Link to='/register'>
         <button className="btn ml-4 btn-success">Register</button>
      </Link>
      </>
     
    }
  
  </div>
</div>

        </div>
    );
};

export default Navbar0;