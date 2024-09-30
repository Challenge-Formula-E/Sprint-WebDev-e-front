import { useForm } from 'react-hook-form';
import google from '../assets/google.png';
import twitter from '../assets/X.png';
import tiktok from '../assets/tiktok.png';
import instagram from '../assets/instagram.png';
import face from '../assets/face.png';
import { useNavigate } from "react-router-dom";
import { useUser } from '../hooks/useUser';
import '../assets/FundoLogin.png';

const LoginScreen = () => {
  const { register, handleSubmit } = useForm();
  const { logIn } = useUser();
  const navigate = useNavigate();


  const onSubmit = data => {
    logIn(data);
    navigate('/Sprint-WebDev-e-front/');
    console.log(data);
  };

  return (
    <div className="bg-[url] min-h-screen bg-cover flex items-center justify-center ">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full md:max-w-lg">
        <h2 className="text-xl font-bold text-center mb-4">LOGIN</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
  type="email"
  id="email"
  {...register('email')}
  placeholder="Email@123.com"
  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
  style={{ color: 'black' }}/>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" id="password" {...register('password')} placeholder="Password123."
                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "style={{ color: 'black' }}/>
          </div>
          <div className="mb-4 text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">forgot password?</a>
          </div>
          <button  href="./Home.jsx"type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">Next </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">Login with</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="#" className="text-gray-600 hover:text-gray-800"><img src={google} alt="Google" className="w-6 h-6"/></a>
            <a href='#' className="text-gray-600 hover:text-gray-800"><img src={tiktok} alt="TikTok" className="w-6 h-6"/></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><img src={face} alt="Facebook" className="w-6 h-6"/></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><img src={twitter} alt="X" className="w-6 h-6"/></a>
            <a href="#" className="text-gray-600 hover:text-gray-800"><img src={instagram} alt="Instagram" className="w-6 h-6"/></a>
          </div>
        </div>
      </div>
      <div className="absolute top-4 right-4 flex space-x-4">
        <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300">SIGN-IN</button>
        <button className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-300">SIGN-UP</button>
      </div>
    </div>
  );
};

export default LoginScreen;
