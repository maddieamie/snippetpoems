import React, { useState, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import AppRouter from "./AppRouter";

const App = () => {
    const { isAuthenticated, isLoading } = useAuth0();

    // Auth data state
    const [authData, setAuthData] = useState({ isAuthenticated: false, isLoading: true });

    // Router data state
    const [routerData, setRouterData] = useState({});

    useEffect(() => {
        if (!isLoading) {
            // Update the authData state once the authentication status is determined
            setAuthData({ isAuthenticated, isLoading });
        }
    }, [isAuthenticated, isLoading]);

    const [toasts, setToasts] = useState([]);

    const addToast = (message, type = 'general') => {
      setToasts([...toasts, { id: Date.now(), message, type }]);
    };
  
    const removeToast = (id) => {
      setToasts(toasts.filter(toast => toast.id !== id));
    };

    return (
        <AppRouter routerData={routerData} setRouterData={setRouterData} authData={authData} toasts={toasts} setToasts={setToasts} addToast={addToast} removeToast={removeToast}/>
    );
};

export default App;