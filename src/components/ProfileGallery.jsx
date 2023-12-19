import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import '../styles/index.css';
import { useAuth0 } from "@auth0/auth0-react";

const SERVER= import.meta.env.VITE_SERVER;

export default function ProfileGallery (props) {

    const { getIdTokenClaims } = useAuth0();
   
    const { setRouterData, routerData } = props;
    const navigate = useNavigate();
   
    const [poems, setPoems] = useState([]);
   

    const handleEditPoem = (poemData) => {
        setRouterData(poemData);
        navigate('/');
      };
  
    const getToken = async () => {
      try {
        const res = await getIdTokenClaims();
        //console.log(res);
        return res.__raw;
      } catch (error) {
        console.error('Error getting token:', error);
      }
    };
  
    const fetchPoems = async () => {
      console.log('fetch poems running');
  
      try {
        const jwt = await getToken();
        //console.log('This is the jwt from GetToken', jwt);
        const url = `${SERVER}/poems`;
        const config = {
          headers: { "Authorization": `Bearer ${jwt}` },
        };
        console.log(config);
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
         window.alert('Poem deleted', response.title);
          
        })
        .then( setPoems((prevPoems) => {
            // Filter out the deleted poem from the state
            return prevPoems.filter((poem) => poem._id !== id);
          }))
        .catch((error) => {
          console.error('Error deleting poem:', error);
        });
    };
return(

<div className="flex min-h-screen w-full flex-wrap content-center justify-center p-5 bg-gray-200">
          <div className="grid grid-cols-2 gap-3">
        
            {poems.length > 0 ? (
              poems.map((poem) => (
                <div className="w-80 bg-white p-3" key={poem._id}>
                  <div className="text black display-inline padding-.25em background-#FFC107 color-#ffffff box-shadow-.5em-0-0-#FFC107">
                   <span id="poemtitlething">{poem.title}</span>
                   
                  </div>
                 
                  <div className="poem-container">
                        {poem.poem.map((row, rowIndex) => (
                            <div key={rowIndex} className="poem-row">
                            {row.map((cell, cellIndex) => (
                                <span key={cellIndex} className="poem-cell">
                                {cell.value}
                                </span>
                            ))}
                            </div>
                        ))}
                        </div>
                  <ul className="mt-3 flex flex-wrap">
                    <li className="mr-auto">
                      <button className='before:ease relative h-10 w-20 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180' onClick={() => handleEditPoem(poem)}><span className='relative z-10'>Edit</span></button>
                    </li>
                    <li className="mr-2">
                      <button className='before:ease relative h-10 w-20 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180' onClick={() => handleDelete(poem._id)}><span className='relative z-10'>Delete</span></button>
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
                  <li className="mr-auto px-4 ">
                    <button className='before:ease relative h-10 w-20 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180' onClick={() => handleEditPoem(poem)}><span className='relative z-10'>Edit</span></button>
                  </li>
                  <li className="mr-2 px-4">
                    <button className='before:ease relative h-10 w-20 overflow-hidden border border-black shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-gray-900 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180' onClick={() => handleDelete(poem._id)}><span className='relative z-10'>Delete</span></button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>)
      
}