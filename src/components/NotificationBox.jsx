import React, { useState } from 'react';

const NotificationBox = ({ selectedTile, selectedTileData, selectedSquare, selectedSquareData, notifications }) => {
 
  


  return (
    <div id="notification-box" aria-label="Notification Box" className="bg-white p-4 rounded-lg shadow-md border-l-4 border-yellow-500">
      <h2 id="selected-tile" className='text-med font-semibold mb-2 text-indigo-400'>Selected Tile: {selectedTile} - <span className='text-med font-bold mb-2 text-indigo-500'>{selectedTileData}</span>  </h2>
      <h2 id="selected-square" className='text-med font-semibold mb-2 text-indigo-400'>Selected Square: Row- {selectedSquare.row} Col- {selectedSquare.col}  --- <span className='text-med font-bold mb-2 text-indigo-500'>{selectedSquareData} </span></h2>
      <h3 className='text-med font-semibold mb-2 text-indigo-400' > Select the tile you would like to use and the square to place it in, then click the button "Add Tile to Board".</h3>
      <h3 className='text-med font-semibold mb-2 text-purple-500'>{notifications}</h3>

      <h3 className='text-med font-semibold mb-2 text-indigo-400'> Warning: When navigating from here to the Profile or About pages, your current poem will not be saved unless you save it using the "Save Poem" button.</h3>
    </div>
  );
};

export default NotificationBox;