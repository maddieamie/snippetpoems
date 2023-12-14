import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

import axios from "axios";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ProfileGallery from "./ProfileGallery";

const SERVER = import.meta.env.VITE_SERVER;

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();


  if (isLoading) {
    return <div>Loading ...  :)</div>;
  }

  return  (
    isAuthenticated ? <ProfileGallery /> : <h2>Login to see a gallery of your poems.</h2>
  );
};

export default Profile;
