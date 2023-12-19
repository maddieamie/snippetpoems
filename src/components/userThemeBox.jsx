import React, {  useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/index.css';
import { Form } from 'react-bootstrap'; 


const SERVER= import.meta.env.VITE_SERVER;

export default function UserThemeBox({getToken, selectTileFunction, handleTileSelect}) {
  const [openTab, setOpenTab] = useState(1);
  const [UserTheme, setUserTheme] = useState(['newarray', 'will look like this']);
  const [themerequest, setUserThemeRequest] = useState("");
  const [findThemeRequest, setFindThemeRequest] = useState('');
  const [FoundTheme, setFoundTheme] = useState(['theme here', 'theme there']);


 

  const callUserDB = () =>
  {
    console.log(themerequest);
    userMakeTheme(themerequest);
  }

  const callThemeDB = () =>
  {
    console.log(findThemeRequest);
    findUserTheme(findThemeRequest);
  }

const findUserTheme = (findThemeRequest) => {
    console.log(findThemeRequest);
    const theme = findThemeRequest;
  
   return getToken()
    .then((jwtPromise) => {
      const headers = {
        Authorization: `Bearer ${jwtPromise}`,
      };

     // console.log(headers); // Optional: Log the headers for debugging

      return axios.get(
        `${SERVER}/fetch-theme?theme=${theme}`,
        {
          headers: headers,
        }
      );
    })
      .then((res) => {
        //console.log(res.data);
        const array = res.data.array;
        setFoundTheme(array);
      })
      .catch((error) => {
        console.log(`Error generating User Theme: ${error}`);
      });
  };



  const userMakeTheme = (themerequest) => {
    console.log(themerequest);
    const theme = themerequest;
  
   return getToken()
    .then((jwtPromise) => {
      const headers = {
        Authorization: `Bearer ${jwtPromise}`,
      };

      //console.log(headers); // Optional: Log the headers for debugging

      return axios.post(
        `${SERVER}/generate-theme?theme=${theme}`, null,
        {
          headers: headers,
        }
      );
    })
      .then((res) => {
        console.log(res.data);
        const array = res.data.phrases;
        setUserTheme(array);
      })
      .catch((error) => {
        console.log(`Error generating User Theme: ${error}`);
      });
  };
  



  /*
  const loadUserTheme = async () => {
    try {
      const res = await axios.get(`${SERVER}/get-themes-user`);
      console.log(res.data);
      const array = res.data; 
      //add in logic here for the first 5 themes?
      //add in logic that they get a max of 5 themes and then CRUD it out?
      Theme(array);
    } catch (error) {
      console.log(`Error loading User Theme: ${error}`);
    }
  };



  useEffect(() => {
    loadUserTheme();
  }, []); */

 
//Condititonal logic for all the things... How many tabs to generate and where to populate what's coming back
  return (
    <div className="p-8 max-w mx-auto">
      <div className="mb-4 flex space-x-4 p-2 bg-white rounded-lg shadow-md" aria-label="Words Container">
        <button
          onClick={() => setOpenTab(1)}
          className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
            openTab === 1 ? 'bg-indigo-500 text-white' : ''
          }`}
        >
          Create Theme
        </button>

        <button
          onClick={() => setOpenTab(2)}
          className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
            openTab === 2 ? 'bg-indigo-500 text-white' : ''
          }`}
        >
          Find Theme of Yours
        </button>
        </div>
     
 

      {openTab === 1 && (
        <div id="Tab1ContentHolderGenerate" className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-indigo-500">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-500" aria-label="Theme Generation Tab">Generate Your Own Theme</h2>
          <div className="flex gap-2 flex-wrap wrap ">
          <h4 className="text-med font-semibold mb-2 text-indigo-400">Write a word or two that describes your theme.</h4> 
            <div className="m-8 flex">
                
                    
                    
                    <Form>
                    <input onChange={({target: {value}}) => setUserThemeRequest(value)} value={themerequest} type="text" name="title" id="title" className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Example: Witchy feels"/>
                    <button className="px-8 rounded-r-lg bg-indigo-400  text-gray-800 font-bold p-4 uppercase border-indigo-500 border-t border-b border-r" type="button"  onClick={callUserDB}>Generate Theme</button>
                    </Form>
                    
                
            </div>
            
            
            <div id="flex1" className='flex gap-2 flex-wrap wrap'>
              {UserTheme && UserTheme.length > 0 &&
                UserTheme.map((phrase, index) => (
                  <div
                    safearea="Tab1ContentHolderGenerate"
                    key={index}
                    id={index}
                    
                    className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-teal-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"  
                    category="generalwords"
                    aria-label={phrase}
                    data-value={phrase}
                    
                    onClick={
                        (e) => {
                            selectTileFunction(index, phrase); handleTileSelect(e)
                          }
                    }
                  >
                    {phrase}
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

        {openTab === 2 && (
                <div id="Tab2ContentHolderGenerate" className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-indigo-500">
                <h2 className="text-2xl font-semibold mb-2 text-indigo-500" aria-label="Theme Finder Tab">Find Your Themes</h2>
                <div className="flex gap-2 flex-wrap wrap ">
                <h4 className="text-med font-semibold mb-2 text-indigo-400">Write a theme you remember making.</h4>
                    <div className="m-10 flex">
                        
                           
                            
                            <Form>
                            <input onChange={({target: {value}}) => setFindThemeRequest(value)} value={findThemeRequest} type="text" name="title" id="title" className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Example: Witchy feels"/>
                            <button className="px-8 rounded-r-lg bg-indigo-400  text-gray-800 font-bold p-4 uppercase border-indigo-500 border-t border-b border-r" type="button"  onClick={callThemeDB}>Find theme</button>
                            </Form>
                            
                        
                    </div>
                    
                    
                    <div id="flex1" className='flex gap-2 flex-wrap wrap'>
                    {FoundTheme && FoundTheme.length > 0 &&
                        FoundTheme.map((phrase, index) => (
                        <div
                            safearea="Tab2ContentHolder"
                            key={index}
                            id={index}
                            
                            className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-purple-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"  
                            category="generalwords"
                            aria-label={phrase}
                            data-value={phrase}
                            
                            onClick={
                                (e) => {
                                    selectTileFunction(index, phrase); handleTileSelect(e)
                                }
                            }
                        >
                            {phrase}
                        </div>
                        ))}
                    </div>
                </div>
                </div>
            )}
      
    </div>
  );
                }
