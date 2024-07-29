
import { Link } from 'react-router-dom';
import { useContext } from 'react'
import { AuthContext } from '../Provider/Provider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const {createUser} =useContext(AuthContext);
 
    const handleRegister=e=>{
      e.preventDefault();
      const form = e.target;
      const name= form.name.value;
      const email=form.email.value;
      const password=form.password.value;
      const photo=form.photo.value;
    
    if(!/^(?=.*[A-Z])(?=.*[a-z]).{6,}$/.test(password))
    {
      toast("Incorrect password");
      return;

    }
    // creat user
    createUser(email,password)
    .then(result=>{
      toast("Registration succesful");
     updateProfile(result,{
      
     })
    })
   .catch(error=>{
    console.error(error);
   })
    
      

    }
    return (
        <div className='h-screen pt-[100px] bg-orange-300 rounded-lg'>
            
            <p className='text-center font-bold text-2xl'>Please Register</p>
          <form onSubmit={handleRegister}  className='md:w-3/4 lg:w-1/2 mx-auto'>
          <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Name"  name='name' className="input input-bordered" required />
        </div>
          
          <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email"  name="email"  className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input type="text" placeholder="photo Url"  name='photo' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password"  name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
          </form>  
          <p className='text-center'>Already have an account <Link to='/login' className='text-blue-600 font-bold'>LogIn</Link></p>
          <ToastContainer />
        </div> 
    );
};

export default Register;