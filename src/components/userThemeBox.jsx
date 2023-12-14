import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/index.css';
import { Form } from 'react-router-dom';


const SERVER= import.meta.env.VITE_SERVER;

export default function UserThemeBox(props) {
  const [openTab, setOpenTab] = useState(1);
  const [UserTheme, setUserTheme] = useState([]);
  const [themetitle, setUserTitleTheme] = useState("");


  const { getToken, selectTileFunction, handleTileSelect } = props;

  const userMakeTheme = async (theme) => {
    try {
   
    console.log(theme);

    jwtPromise = await getToken();

        const config = {
          headers: { "Authorization": `Bearer ${jwtPromise}` }
        };
      

      const res = await axios.post(`${SERVER}/generate-theme?theme=${theme}`, config);
      console.log(res.data);
      const array = res.data;
      setUserTheme(array);
    } catch (error) {
      console.log(`Error generating User Theme: ${error}`);
    }
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
        </div>
     
 

      {openTab === 1 && (
        <div id="Tab1ContentHolder" className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-indigo-500">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-500" aria-label="Theme Generation Tab">Generate Your Own Theme</h2>
          <div className="flex gap-2 flex-wrap wrap ">
            <div>
                <form className="m-4 flex">
                    <h4 className="text-med font-semibold mb-2 text-indigo-400">Write a word or two that describes your theme.</h4>
                    <Form>
                    <input onChange={(e) => setUserTitleTheme({title: e.target.value})} value={themetitle.title} type="text" name="title" id="title" className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Example: Witchy feels"/>
                    <button className="px-8 rounded-r-lg bg-indigo-400  text-gray-800 font-bold p-4 uppercase border-indigo-500 border-t border-b border-r" type='submit' value="submit" onSubmit={userMakeTheme}>Generate Theme</button>
                    </Form>
                    </form>
                
            </div>
            
            
            
              {UserTheme.length > 0 &&
                UserTheme.map((phrase, index) => (
                  <div
                    safearea="Tab1ContentHolder"
                    key={index}
                    id={index}
                    
                    className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-purple-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"  
                    category="generalwords"
                    aria-label={phrase}
                    data-value={phrase}
                    
                    onClick={
                        () => {
                            selectTileFunction(index, phrase); handleTileSelect(e)
                          }
                    }
                  >
                    {phrase}
                  </div>
                ))}
            
          </div>
        </div>
      )}


      
    </div>
  );
}
