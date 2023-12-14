import React from 'react';
import ReactDOM from 'react-dom/client';
import { Auth0Provider } from "@auth0/auth0-react";


import App from './components/App';
import "./styles/index.css"

const root = ReactDOM.createRoot(document.getElementById('root'));


const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
const redirectUri = import.meta.env.VITE_AUTH0_REDIRECT_URI;



root.render(
 <React.StrictMode>
 <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: redirectUri,
      }}
      
    >
   
  
    <App />
  
    </Auth0Provider>
 
 </React.StrictMode>
);
