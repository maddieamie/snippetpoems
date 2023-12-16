import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Logout from './Logout';

const Header = ({authData}) => {

   
   

  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setPercent(Math.round((winScroll / height) * 100));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-32">
      <div className="flex flex-col">
        {/* Page Scroll Progress */}
        <div
          className="fixed inset-x-0 top-0 z-50 h-0.5 mt-0.5 bg-blue-500"
          style={{ width: `${percent}%` }}
        ></div>

        {/* Navbar */}
        <nav className="flex justify-around py-4 bg-green-100/80 backdrop-blur-md shadow-md w-full fixed top-0 left-0 right-0 z-10">
          {/* Links Section */}
          <div className="items-center hidden space-x-8 lg:flex">


            <Link
              to="/"
              className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300"
            >
              Magnet Board
            </Link>
            <Link
              to="/profile"
              className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300"
            >
              Profile
            </Link>


            <Link
              to="/about"
              className="flex text-gray-600 hover:text-blue-500 cursor-pointer transition-colors duration-300"
            >
              About
            </Link>
            <div className="flex items-center space-x-5">
            <div
              className="flex text-gray-600 cursor-pointer transition-colors duration-300 font-semibold"
            >
             
          {authData.isAuthenticated ? <Logout /> : <Login /> }  
            </div>
            
          </div>
          
          </div>
        </nav>
      </div>
 
    </div>
  );
};

export default (Header);
