import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import ProfileGallery from "./ProfileGallery";


const Profile = (props) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const { routerData, setRouterData } = props;


  if (isLoading) {
    return <div>Loading ...  :)</div>;
  }

  return  (
    isAuthenticated ? <ProfileGallery routerData={routerData} setRouterData={setRouterData} /> : <h2>Login to see a gallery of your poems.</h2>
  );
};

export default Profile;
