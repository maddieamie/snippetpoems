import React, { Component } from "react";
class Buttons extends Component {
    render() {

        const { board, moveSelectedTileToSquare } = this.props;

        return (

<div id="ButtonHolder" aria-label="Button Holding Container">
    <button
    className="middle none center mr-3 rounded-lg bg-indigo-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-light="true"
    aria-label="Add Tile to Board"
    onClick={() => moveSelectedTileToSquare()}
    
  >Add Tile to Board</button>   

    <button
    className="middle none center mr-3 rounded-lg bg-indigo-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-indigo-500/20 transition-all hover:shadow-lg hover:shadow-indigo-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-light="true"
    aria-label="Save Poem"
    onClick={() => console.log(board)}
    
  >Save Poem</button>

  <button
    className="middle none center mr-3 rounded-lg bg-teal-400 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-teal-500/20 transition-all hover:shadow-lg hover:shadow-teal-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-light="true"
    aria-label="Update Poem"
    
  >Update Poem</button>

   <button
    className="middle none center mr-3 rounded-lg bg-red-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-light="true"
    aria-label="Delete Poem"
    
  >Delete Poem</button>

  </div>
        )
}
}
export default Buttons;