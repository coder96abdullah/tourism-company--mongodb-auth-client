
import { FcGoogle} from "react-icons/fc";
import { GrGithub } from "react-icons/gr";
import React, { useContext } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import  { AuthContext } from '../Provider/Provider';
import app from "../../Firebase/firebase.config";
const auth = getAuth(app);

const Login = () => {
  const googleProvider = new GoogleAuthProvider();
  // const githubProvider= new GithubAuthProvider();
  const {signIn}=useContext(AuthContext);
  const location=useLocation();
  const navigate=useNavigate();

    const handleLogin=e=>{
      e.preventDefault();
      const form = e.target;
      const email= form.email.value;
      const password=form.password.value;

      signIn(email,password)
      .then(()=>{
        navigate(location?.state ? location.state : '/');
      })
      .catch()

    
    }
    const signInUsingGoogle=()=>{
      signInWithPopup(auth,googleProvider)
      .then()
      .catch()
    }
    const signInUsingGithub=()=>{

    }
    return (
        <div className='h-screen pt-[200px] bg-orange-300 rounded-lg'>
        <p className='text-center font-bold text-2xl'>Please Log In</p>
      <form onSubmit={handleLogin} className='md:w-3/4 lg:w-1/2 mx-auto'>
      <div className="form-control">
      <label className="label">
        <span className="label-text">Email</span>
      </label>
      <input type="email" placeholder="email"  name='email' className="input input-bordered" required />
    </div>
    <div className="form-control">
      <label className="label">
        <span className="label-text">Password</span>
      </label>
      <input type="password" name='password' placeholder="password" className="input input-bordered" required />
      <label className="label">
        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
      </label>
    </div>
    <div className="form-control mt-6">
      <button className="btn btn-primary">Login</button>
    </div>
      </form>  
      <p className='text-center pt-5 font-bold'>Do not have an account<Link to='/register' className='text-blue-600  pl-2'>Register</Link></p>
      <div className='flex items-center justify-center gap-5 '>
      <p className='font-bold'>LogIn with</p>
      <span className='p-2 border rounded-md bg-gray-100' onClick={signInUsingGoogle}><FcGoogle /></span>
      <span className='p-2 border rounded-md bg-gray-100' onClick={signInUsingGithub}><GrGithub /></span>
      </div>
    </div>
    );
};

export default Login;