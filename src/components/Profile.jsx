import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const SERVER = import.meta.env.VITE_SERVER;

const Profile = () => {
  const { user, isAuthenticated, isLoading, getIdTokenClaims } = useAuth0();
  const navigate = useNavigate();
  const [poems, setPoems] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const getToken = async () => {
    try {
      const res = await getIdTokenClaims();
      return res;
      //return res.__raw;
    } catch (error) {
      console.error('Error getting token:', error);
    }
  };

  const fetchPoems = async () => {
    console.log('fetch poems running');

    try {
      const jwt = await getToken();
      const url = `${SERVER}/poems`;
      const config = {
        headers: { "Authorization": `Bearer ${jwt}` },
      };

      const response = await axios.get(url, config);
      setPoems(response.data);
    } catch (error) {
      console.error('Error fetching poems:', error);
      setPoems([]);
    }
  };

  useEffect(() => {
    fetchPoems();
  }, []); // Run once on component mount

  const handleEditPoem = (poemData) => {
    // Navigate to the MagnetBoard page with isEditing prop and poem data
    navigate('/edit', { isEditing: true, poemData });
  };

  const handleDelete = (id) => {
    console.log('handleDelete running');

    getToken()
      .then(jwt => {
        const config = {
          headers: { "Authorization": `Bearer ${jwt}` }
        };

        return axios.delete(`${SERVER}/poems/${id}`, config);
      })
      .then((response) => {
        const deletedPoem = response.data;

        setPoems((prevPoems) => {
          // Filter out the deleted poem from the state
          return prevPoems.filter((poem) => poem._id !== id);
        });

        setShowAlert(true);
      })
      .catch((error) => {
        console.error('Error deleting poem:', error);
      });
  };

  if (isLoading) {
    return <div>Loading ...  :)</div>;
  }

  return (
    isAuthenticated && (
      <div id="profile">
        <div id="userholder">
          <img id="userpic" src={user.picture} alt={user.name} />
          <h2 id="username">Hi, {user.name}</h2>
          <p id="useremail">Email: {user.email}</p>
        </div>

        <div class="flex min-h-screen w-full flex-wrap content-center justify-center p-5 bg-gray-200">
          <div class="grid grid-cols-2 gap-3">
            {showAlert && (
              <Alert variant="success">
                Poem Deleted!
                <Button onClick={() => setShowAlert(false)} variant="outline-success">
                  Close me
                </Button>
              </Alert>
            )}

            {poems.length > 0 ? (
              poems.map((poem) => (
                <div className="w-80 bg-white p-3" key={poem._id}>
                  <div className="text black display-inline padding-.25em background-#FFC107 color-#ffffff box-shadow-.5em-0-0-#FFC107">
                   <span>{poem.title}</span>
                   <span>{poem.poem}</span>
                  </div>
                  
                  <img
                    className="h-52 w-full object-cover"
                    src="https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Marble Texture from Henry & Co at Pexels - www.pexels.com/@hngstrm/"
                  />
                  <ul className="mt-3 flex flex-wrap">
                    <li clasNames="mr-auto">
                      <button onClick={() => handleEditPoem(poem)}>Edit Poem</button>
                    </li>
                    <li class="mr-2">
                      <button onClick={() => handleDelete(poem._id)}>Delete Poem</button>
                    </li>
                  </ul>
                </div>
              ))
            ) : (
              <div className="w-80 bg-white p-3">
                <div className="text black display-inline padding-.25em background-#FFC107 color-#ffffff box-shadow-.5em-0-0-#FFC107">
                  <span>This could be a poem here!</span>
                </div>
                <img
                  className="h-52 w-full object-cover"
                  src="https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Marble Texture from Henry & Co at Pexels - www.pexels.com/@hngstrm/"
                />
                <ul className="mt-3 flex flex-wrap">
                  <li clasNames="mr-auto">
                    <button onClick={() => handleEditPoem({})}>Edit Poem</button>
                  </li>
                  <li class="mr-2">
                    <button onClick={() => handleDelete('')}>Delete Poem</button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  );
};

export default Profile;
