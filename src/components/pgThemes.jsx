import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/index.css';

const SERVER= import.meta.env.VITE_SERVER;

export default function PgThemes(props) {
  const [openTab, setOpenTab] = useState(1);
  const [Reg, setReg] = useState([]);
  const [Witchy, setWitchy] = useState([]);
  const [Seattle, setSeattle] = useState([]);
  const [Rp, setRp] = useState([]);
  const [lgbt, setLgbt] = useState([]);
  const [bb, setBB] = useState([]);

  const { getToken, selectTileFunction, handleTileSelect } = props;

  const hardarray= [
    "The",
    "Be",
    "Shantay Shantay",
    "Together",
    "Strawberry",
    "Orange peel",
    "In",
    "That",
    "Have",
    "I",
    "It",
    "For",
    "Not",
    "On",
    "He",
    "We",
    "With",
    "As",
    "You",
    "Do",
    "At",
    "This",
    "But",
    "His",
    "By",
    "From",
    "They",
    "We",
    "Say",
    "Her",
    "She",
    "Or",
    "An",
    "Will",
    "My",
    "One",
    "All",
    "Would",
    "There",
    "Their",
    "What",
    "So",
    "Up",
    "Out",
    "If",
    "About",
    "Who",
    "Get",
    "Hers",
    "His",
    "Theirs",
    "Their",
    "A",
    "Sky"
  ]


  const loadReg = async () => {
    console.log('Loading Reg...');
    setReg([...hardarray]);
    console.log('Reg loaded:', Reg);
    /*
    try {
        jwtPromise = await getToken();

        const config = {
          headers: { "Authorization": `Bearer ${jwtPromise}` }
        };
      
      console.log('config', config)

      const res = await axios.get(`${SERVER}/get-Reg`, config);
      console.log(res.data);
      const array = res.data;
      setReg(array);
    } catch (error) {
      console.log(`Error loading Reg: ${error}`);
    }*/
  };


  const loadWitchy = async () => {
    try {
        jwtPromise = await getToken();

        const config = {
          headers: { "Authorization": `Bearer ${jwtPromise}` }
        };
      
      console.log('config', config)
      const res = await axios.get(`${SERVER}/get-witchy`, config);
      console.log(res.data);
      const array = res.data;
      setWitchy(array);
    } catch (error) {
      console.log(`Error loading Witchy: ${error}`);
    }
  };

  const loadRp = async () => {
    try {
        jwtPromise = await getToken();

        const config = {
          headers: { "Authorization": `Bearer ${jwtPromise}` }
        };
      
      console.log('config', config)
      const res = await axios.get(`${SERVER}/get-RP`, config);
      console.log(res.data);
      const array = res.data;
      setRp(array);
    } catch (error) {
      console.log(`Error loading RP: ${error}`);
    }
  };

  const loadSeattle = async () => {
    try {
        jwtPromise = await getToken();

        const config = {
          headers: { "Authorization": `Bearer ${jwtPromise}` }
        };
      
      console.log('config', config)
      const res = await axios.get(`${SERVER}/get-seattle`, config);
      console.log(res.data);
      const array = res.data;
      setSeattle(array);
    } catch (error) {
      console.log(`Error loading Seattle: ${error}`);
    }
  };

  const loadLgbt = async () => {
    try {
        jwtPromise = await getToken();

        const config = {
          headers: { "Authorization": `Bearer ${jwtPromise}` }
        };
      
      console.log('config', config)
      const res = await axios.get(`${SERVER}/get-lgbt`, config);
      console.log(res.data);
      const array = res.data;
      setLgbt(array);
    } catch (error) {
      console.log(`Error loading LGBT: ${error}`);
    }
  };

  const loadBB = async () => {
    try {
        jwtPromise = await getToken();

        const config = {
          headers: { "Authorization": `Bearer ${jwtPromise}` }
        };
      
      console.log('config', config)
      const res = await axios.get(`${SERVER}/get-bb`, config);
      console.log(res.data);
      const array = res.data;
      setBB(array);
    } catch (error) {
      console.log(`Error loading BB: ${error}`);
    }
  };

  /*const getPosition = (index, isReg2) => {
    const refs = isReg2 ? tileRefsReg2.current : tileRefsReg.current;
    const tilex = refs[index].current.offsetLeft;
    setX(tilex);

    const tiley = refs[index].current.offsetTop;
    setY(tiley);
  };*/

  useEffect(() => {
    loadReg();
    loadWitchy();
    loadRp();
    loadSeattle();
    loadLgbt();
    loadBB();
  }, []);

 

  return (
    <div className="p-8 max-w mx-auto" id="tileholder">
      <div className="mb-4 flex space-x-4 p-2 bg-white rounded-lg shadow-md" aria-label="Words Container">
        <button
          onClick={() => setOpenTab(1)}
          className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
            openTab === 1 ? 'bg-indigo-500 text-white' : ''
          }`}
        >
          Basic Words
        </button>

        <button
          onClick={() => setOpenTab(2)}
          className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
            openTab === 2 ? 'bg-indigo-500 text-white' : ''
          }`}
        >
          Witchy
        </button>

        <button
          onClick={() => setOpenTab(3)}
          className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
            openTab === 3 ? 'bg-indigo-500 text-white' : ''
          }`}
        >
          Ru Paul's DR
        </button>

        <button
          onClick={() => setOpenTab(4)}
          className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
            openTab === 4 ? 'bg-indigo-500 text-white' : ''
          }`}
        >
          Seattle
        </button>

        <button
          onClick={() => setOpenTab(5)}
          className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
            openTab === 5 ? 'bg-indigo-500 text-white' : ''
          }`}
        >
          LGBT
        </button>

        <button
          onClick={() => setOpenTab(6)}
          className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
            openTab === 6 ? 'bg-indigo-500 text-white' : ''
          }`}
        >
          BB
        </button>

      </div>

      {openTab === 1 && (
        <div id="Tab1ContentHolder" className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-indigo-500">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-500" aria-label="Basic Words 1">Basic Words</h2>
          <div className="flex gap-2 flex-wrap wrap " >
            
              {Reg.length > 0 &&
                Reg.map((phrase, index) => (
                  <div
                    safearea="Tab1ContentHolder"
                    key={index}
                    id={index}
                    ref={tileRefsReg.current[index]}
                    className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-purple-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"  
                    category="generalwords"
                    aria-label={phrase}
                    data-value={phrase}
                    
                    onClick={() => {
                        selectTileFunction(index, phrase); handleTileSelect(e)
                    }}
                  >
                    {phrase}
                  </div>
                  
                ))}
            
          </div>
        </div>
      )}

      {openTab === 2 && (
        <div id="Tab2ContentHolder" className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-indigo-500">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-500" aria-label="Basic Words 2">Witchy</h2>
          <div className="flex gap-2 flex-wrap wrap">
         
              {Witchy.length > 0 &&
                Witchy.map((phrase, index) => (
                  <div
                    safearea="Tab2ContentHolder"
                    key={index}
                    id={index}
                    ref={tileRefsReg2.current[index]}
                    className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-teal-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white" category="generalwords2"
                    aria-label={phrase}
                    data-value={phrase}
                    onClick={() => {
                        selectTileFunction(index, phrase); handleTileSelect(e)
                    }}
                    
                  >
                    {phrase}
                  </div>
                ))}

                
            
          </div>
        </div>
      )}

        {openTab === 3 && (
        <div id="Tab3ContentHolder" className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-indigo-500">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-500" aria-label="Ru Paul's Drag Race">Ru Paul's Drag Race</h2>
          <div className="flex gap-2 flex-wrap wrap ">
            
              {Rp.length > 0 &&
                Rp.map((phrase, index) => (
                  <div
                    safearea="Tab1ContentHolder"
                    key={index}
                    id={index}
                    ref={tileRefsRp.current[index]}
                    className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-purple-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white" 
                    category="generalwords"
                    aria-label={phrase}
                    data-value={phrase}
                    
                    onClick={() => {
                        selectTileFunction(index, phrase); handleTileSelect(e)
                    }}
                  >
                    {phrase}
                  </div>
                ))}
            
          </div>
        </div>
      )}

        {openTab === 4 && (
        <div id="Tab4ContentHolder" className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-indigo-500">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-500" aria-label="Basic Words 1">Seattle</h2>
          <div className="flex gap-2 flex-wrap wrap " >
            
              {Seattle.length > 0 &&
                Seattle.map((phrase, index) => (
                  <div
                    safearea="Tab1ContentHolder"
                    key={index}
                    id={index}
                    ref={tileRefsReg.current[index]}
                    className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-purple-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"  
                    category="generalwords"
                    aria-label={phrase}
                    data-value={phrase}
                    
                    onClick={() => {
                        selectTileFunction(index, phrase); handleTileSelect(e)
                    }}
                  >
                    {phrase}
                  </div>
                  
                ))}
            
          </div>
        </div>
      )}

        {openTab === 5 && (
        <div id="Tab5ContentHolder" className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-indigo-500">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-500" aria-label="Basic Words 1">LGBT</h2>
          <div className="flex gap-2 flex-wrap wrap " >
            
              {lgbt.length > 0 &&
                lgbt.map((phrase, index) => (
                  <div
                    safearea="Tab1ContentHolder"
                    key={index}
                    id={index}
                    ref={tileRefsReg.current[index]}
                    className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-purple-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"  
                    category="generalwords"
                    aria-label={phrase}
                    data-value={phrase}
                    
                    onClick={() => {
                        selectTileFunction(index, phrase); handleTileSelect(e)                   
                     }}
                  >
                    {phrase}
                  </div>
                  
                ))}
            
          </div>
        </div>
      )}

        {openTab === 6 && (
        <div id="Tab6ContentHolder" className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-indigo-500">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-500" aria-label="Basic Words 1">BB</h2>
          <div className="flex gap-2 flex-wrap wrap " >
            
              {bb.length > 0 &&
                bb.map((phrase, index) => (
                  <div
                    safearea="Tab1ContentHolder"
                    key={index}
                    id={index}
                    ref={tileRefsReg.current[index]}
                    className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-purple-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"  
                    category="generalwords"
                    aria-label={phrase}
                    data-value={phrase}
                    
                    onClick={() => {
                        selectTileFunction(index, phrase); handleTileSelect(e)
                    }}
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





