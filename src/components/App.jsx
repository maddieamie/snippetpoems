import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Profile from './Profile';
import MagnetBoard from './MagnetBoard';
//import { CallbackPage } from "./CallbackPage";
//<Route path="/callback" element={<CallbackPage />} />
import { useAuth0 } from '@auth0/auth0-react';

import '../styles/index.css';

const App = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <Router>
      <Header />
      
        <Routes>
          
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/"
            element={ <MagnetBoard /> }
          />
       
        </Routes>
      
      </Router>
    </>
  );
};

export default App;
