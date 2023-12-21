import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/index.css';
import { useAuth0 } from '@auth0/auth0-react';

const SERVER= import.meta.env.VITE_SERVER;

export default function PgThemes(props) {
  const [openTab, setOpenTab] = useState(1);
  const [Reg, setReg] = useState([]);
  const [Witchy, setWitchy] = useState([]);
  const [Seattle, setSeattle] = useState([]);
  const [Rp, setRp] = useState([]);
  const [lgbt, setLgbt] = useState([]);
  const [bb, setBB] = useState([]);


  const [isWitchyLoading, setIsWitchyLoading] = useState(false);
  const [isSeattleLoading, setIsSeattleLoading] = useState(false);
  const [isRpLoading, setIsRpLoading] = useState(false);
  const [islgbtLoading, setIsLgbtLoading] = useState(false);
  const [isbbLoading, setIsbbLoading] = useState(false);


  const { authData, selectTileFunction, handleTileSelect, addToast} = props;


  


  const hardarray= [ "a", "about", "actually", "all", "always", "am",  "an",
"and", "are", "around", "as", "at", "be", "but", "by", "do", "e", "ed", "er",
    "es", "for", "from", "get",  "has", "have",  "he",  "here",  "her",  "hers",  "i",  "if",  "in",  "ing",  "is",  "it",  "like",  "live",  "love",  "ly",  "my",  "not", "of", "old", "on", "only", "or", "our",
    "out", "say", "she",  "sky",   "so",  "than",  "thanks", "that", "the",
    "then", "there", "they", "this",  "though",  "to",  "too", "together",
    "was", "we", "were",  "what",  "who",  "why",  "will",  "with",  "woman",
    "work",  "world",  "would",   "y",   "you",   "ze",  "xe",  "zir",  "ze",
    "zir",  "theirs",  "xirs",  "zirs",  "the",  "be",  "to",  "of",  "and",  "a", "in", "that",  "have",  "i",  "it",  "for", "not", "on","he", "we", "with",  "as",  "you",  "do",  "at",  "this",  "but",  "his",  "by", "from",  "they",  "say",  "her",  "she",  "or",  "an",
    "will",  "my", "one", "all", "would",  "there",  "their",  "what",
    "so",  "up",  "out",  "if",  "about",  "who", "get", "Shantay Shantay", "wife", "husband", "partner", "spouse", "child", "sibling", "sister", "brother", "forgive", "forget", "laugh", "understand", "glitter", "boom"
  ]
  


 // <------------------- Loading themes --------------------->


  useEffect(() => {

    if(props.authData.isAuthenticated){
        fetchData();
    }
  
  }, [authData.isAuthenticated]);

  const fetchData = async () => {
    try {
        console.log('FetchDatarunning')
        addToast('Loading themes!');
        
        loadWitchy();
        loadRp();
        loadSeattle();
        loadLgbt();
        loadBB();
      

    } catch (error) {
      console.log('Error fetching data:', error);
      addToast('Error fetching themes, sorry.', 'error');
    }
  };


  useEffect(() => {
    loadReg();
  }, []);

  //<----------- functions for each loading theme ---------------->

  const loadReg = async () => {
    console.log('Loading Reg...');
    addToast('Loading basic theme...');
    setReg([...hardarray]);
  

  };


  const loadWitchy = async () => {
    try {   
        console.log('Loading Witchy')
        setIsWitchyLoading(true);
      const res = await axios.get(`${SERVER}/get-witchy`);
     
      const array = res.data;
      //console.log('Witchy', array)
      setWitchy(array);
    } catch (error) {
      console.log(`Error loading Witchy: ${error}`);
    }
    finally {
        setIsWitchyLoading(false);
    }
  };

  const loadRp = async () => {
    try {
        setIsRpLoading(true);
      const res = await axios.get(`${SERVER}/get-RP`);
     
      const array = res.data;
      //console.log(array);
      setRp(array);
    } catch (error) {
      console.log(`Error loading RP: ${error}`);
    }
    finally {
        setIsRpLoading(false);
    }
  };

  const loadSeattle = async () => {
    try {
        
    setIsSeattleLoading(true); 
      const res = await axios.get(`${SERVER}/get-seattle`);
   
      const array = res.data;
      setSeattle(array);
    } catch (error) {
      console.log(`Error loading Seattle: ${error}`);
    }
    finally {
        setIsSeattleLoading(false);
    }
  };

  const loadLgbt = async () => {
    try {
        
        setIsLgbtLoading(true);
      const res = await axios.get(`${SERVER}/get-lgbt`);

      const array = res.data;
      setLgbt(array);
    } catch (error) {
      console.log(`Error loading LGBT: ${error}`);
    }
    finally {
        setIsLgbtLoading(false);
    }
  };

  const loadBB = async () => {
    try {
        setIsbbLoading(true);
      const res = await axios.get(`${SERVER}/get-bb`);
 
      const array = res.data;
      setBB(array);
    } catch (error) {
      console.log(`Error loading BB: ${error}`);
    }
    finally {
        setIsbbLoading(false);
    }
  };

 

 

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
                  
                    className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-purple-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"  
                    category="generalwords"
                    aria-label={phrase}
                    data-value={phrase}
                    
                    onClick={(e) => {
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

          {!props.authData.isAuthenticated && <p className='themetext'>Please login to view the tiles of this theme.</p>}
            {isWitchyLoading && <p className='themetext'>Loading data from server...</p>}
         
              {Witchy.length > 0 &&
                Witchy.map((phrase, index) => (
                  <div
                    safearea="Tab2ContentHolder"
                    key={index}
                    id={index}
                
                    className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-teal-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white" category="generalwords2"
                    aria-label={phrase}
                    data-value={phrase}
                    onClick={(e) => {
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
          {!props.authData.isAuthenticated && <p className='themetext'>Please login to view the tiles of this theme.</p>}
            {isRpLoading && <p className='themetext'>Loading data from server...</p>}
            
              {Rp.length > 0 &&
                Rp.map((phrase, index) => (
                  <div
                    safearea="Tab1ContentHolder"
                    key={index}
                    id={index}
                   
                    className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-purple-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white" 
                    category="generalwords"
                    aria-label={phrase}
                    data-value={phrase}
                    
                    onClick={(e) => {
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
          {!props.authData.isAuthenticated && <p className='themetext'>Please login to view the tiles of this theme.</p>}
            {isSeattleLoading && <p className='themetext'>Loading data from server...</p>}
            
              {Seattle.length > 0 &&
                Seattle.map((phrase, index) => (
                  <div
                    safearea="Tab1ContentHolder"
                    key={index}
                    id={index}
                   
                    className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-teal-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"  
                    category="generalwords"
                    aria-label={phrase}
                    data-value={phrase}
                    
                    onClick={(e) => {
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
          {!props.authData.isAuthenticated && <p className='themetext'>Please login to view the tiles of this theme.</p>}
            {islgbtLoading && <p className='themetext'>Loading data from server...</p>}
            
              {lgbt.length > 0 &&
                lgbt.map((phrase, index) => (
                  <div
                    safearea="Tab1ContentHolder"
                    key={index}
                    id={index}
                    
                    className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-purple-500 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"  
                    category="generalwords"
                    aria-label={phrase}
                    data-value={phrase}
                    
                    onClick={(e) => {
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
          {!props.authData.isAuthenticated && <p className='themetext'>Please login to view the tiles of this theme.</p>}
            {isbbLoading && <p className='themetext'>Loading data from server...</p>}
            
              {bb.length > 0 &&
                bb.map((phrase, index) => (
                  <div
                    safearea="Tab1ContentHolder"
                    key={index}
                    id={index}
                   
                    className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-teal-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white"  
                    category="generalwords"
                    aria-label={phrase}
                    data-value={phrase}
                    
                    onClick={(e) => {
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





