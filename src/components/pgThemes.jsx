import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/index.css';

const SERVER= import.meta.env.VITE_SERVER;

export default function PgThemes(props) {
  const [openTab, setOpenTab] = useState(1);
  const [Reg, setReg] = useState([]);
  const [Reg2, setReg2] = useState([]);
  const [Rp, setRp] = useState([]);
  const tileRefsReg = useRef(Reg.map(() => React.createRef()));
  const tileRefsReg2 = useRef(Reg2.map(() => React.createRef()));
  const tileRefsRp = useRef(Rp.map(() => React.createRef()));


  const loadReg = async () => {
    try {
      const res = await axios.get(`${SERVER}/get-Reg`);
      console.log(res.data);
      const array = res.data;
      setReg(array);
    } catch (error) {
      console.log(`Error loading Reg: ${error}`);
    }
  };

  const loadReg2 = async () => {
    try {
      const res = await axios.get(`${SERVER}/get-Reg2`);
      console.log(res.data);
      const array = res.data;
      setReg2(array);
    } catch (error) {
      console.log(`Error loading Reg2: ${error}`);
    }
  };

  const loadRp = async () => {
    try {
      const res = await axios.get(`${SERVER}/get-RP`);
      console.log(res.data);
      const array = res.data;
      setRp(array);
    } catch (error) {
      console.log(`Error loading RP: ${error}`);
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
    loadReg2();
    loadRp();
  }, []);

 

  return (
    <div className="p-8 max-w mx-auto">
      <div className="mb-4 flex space-x-4 p-2 bg-white rounded-lg shadow-md" aria-label="Words Container">
        <button
          onClick={() => setOpenTab(1)}
          className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
            openTab === 1 ? 'bg-indigo-500 text-white' : ''
          }`}
        >
          Basic Words Pt1
        </button>
        <button
          onClick={() => setOpenTab(2)}
          className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
            openTab === 2 ? 'bg-indigo-500 text-white' : ''
          }`}
        >
          Basic Words Pt2
        </button>
        <button
          onClick={() => setOpenTab(3)}
          className={`flex-1 py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-blue transition-all duration-300 ${
            openTab === 3 ? 'bg-indigo-500 text-white' : ''
          }`}
        >
          Ru Paul's DR
        </button>
      </div>

      {openTab === 1 && (
        <div id="Tab1ContentHolder" className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-indigo-500">
          <h2 className="text-2xl font-semibold mb-2 text-indigo-500" aria-label="Basic Words 1">Basic Words</h2>
          <div className="flex gap-2 flex-wrap wrap ">
            
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
                      props.setSelectedTile(index, phrase);
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
          <h2 className="text-2xl font-semibold mb-2 text-indigo-500" aria-label="Basic Words 2">Basic Words 2</h2>
          <div className="flex gap-2 flex-wrap wrap">
         
              {Reg2.length > 0 &&
                Reg2.map((phrase, index) => (
                  <div
                    safearea="Tab2ContentHolder"
                    key={index}
                    id={index}
                    ref={tileRefsReg2.current[index]}
                    className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-teal-400 py-2 px-3.5 align-baseline font-sans text-xs font-bold uppercase leading-none text-white" category="generalwords2"
                    aria-label={phrase}
                    data-value={phrase}
                    onClick={() => {
                        props.setSelectedTile(index, phrase);
                    }}
                    
                  >
                    {phrase}
                  </div>
                ))}

                
            
          </div>
        </div>
      )}

{openTab === 3 && (
        <div id="Tab1ContentHolder" className="transition-all duration-300 bg-white p-4 rounded-lg shadow-md border-l-4 border-indigo-500">
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
                      props.setSelectedTile(index, phrase);
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





