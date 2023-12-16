import React, { useState } from 'react';
import { Row, Form } from 'react-bootstrap'; 

const Buttons = ({ moveSelectedTileToSquare,setPoemTitle, callDB, clearSelectedSquare, resetBoard }) => {
  const [isDisplayed, setIsDisplayed] = useState(false);

  return (

<div id="ButtonHolder" aria-label="Button Holding Container">
   <Row> <button
    className="middle none center mr-3 rounded-lg bg-indigo-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-light="true"
    aria-label="Add Tile to Board"
    onClick={() => moveSelectedTileToSquare()}
    
  >Add Tile to Board</button> 

  <button
    className="middle none center mr-3 rounded-lg bg-yellow-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-light="true"
    aria-label="Clear Selected Square"
    onClick={() => clearSelectedSquare()}
  >Clear Selected Square</button>  

    <button
    className="middle none center mr-3 rounded-lg bg-indigo-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-light="true"
    aria-label="Save Poem"
    onClick={() => { setIsDisplayed(true)}}
    
  >Save Poem</button>




   <button
    className="middle none center mr-3 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-light="true"
    aria-label="Clear Board"
    onClick={() => resetBoard()}
    
  >Clear Board</button>

</Row>
 <Row>
  <div id="titlediv" style={{ display: isDisplayed ? 'flex' : 'none' }}>

    <h4 className="text-med font-semibold mb-2 text-indigo-400">Write a title for your poem.</h4>
                    <Form>
                    <input onChange={({target: {value}}) => setPoemTitle(value)} type="text" name="title" id="title" className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="Example: Best Magnet Poem Ever Part One"/>
                    <button className="px-8 rounded-r-lg bg-indigo-400  text-gray-800 font-bold p-4 uppercase border-indigo-500 border-t border-b border-r" type="button"  onClick={() => {
                        callDB();
                setIsDisplayed(false);
              }}>Confirm Save Poem</button></Form>
                    

  </div>
  </Row>
  </div>
   
        )
}

export default Buttons;