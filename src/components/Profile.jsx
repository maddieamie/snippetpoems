import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import ProfileGallery from "./ProfileGallery";



const Profile = (props) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const { routerData, setRouterData, addToast, toasts, removeToast } = props;



  if (isLoading) {
    return <div className="themetext">Loading ...  :)</div>;
  }

  return  (
    isAuthenticated ? <ProfileGallery routerData={routerData} setRouterData={setRouterData} addToast={addToast} toasts={toasts} removeToast={removeToast} /> : <h2 className="themetext">Login to see a gallery of your poems.</h2>
  );
};

export default Profile;
