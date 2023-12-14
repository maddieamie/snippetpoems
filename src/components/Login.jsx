import React from "react";
import { useAuth0 } from '@auth0/auth0-react';



function Login() {

  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  function handleLogin() {
    loginWithRedirect();
  }

  return ! isAuthenticated &&
    <button className="middle none center mr-3 rounded-lg bg-indigo-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-light="true" onClick={handleLogin}>Log in</button>
  ;
}
export default Login;