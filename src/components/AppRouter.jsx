import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import About from './About';
import Profile from './Profile';
import MagnetBoard from './MagnetBoard';


import '../styles/index.css';

const AppRouter = ({ routerData, setRouterData, authData, toasts, setToasts, addToast, removeToast }) => {


  return (
    <>
      <Router>
      <Header authData={authData}/>
      
        <Routes>
          
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile routerData={routerData} setRouterData={setRouterData} authData={authData} toasts={toasts} setToasts={setToasts} addToast={addToast} removeToast={removeToast}/>} />
          <Route
            path="/"
            element={ <MagnetBoard routerData={routerData} setRouterData={setRouterData} authData={authData} toasts={toasts} setToasts={setToasts} addToast={addToast} removeToast={removeToast}/> }
          />
          
       
        </Routes>
      
      </Router>
    </>
  );
};

export default AppRouter;
