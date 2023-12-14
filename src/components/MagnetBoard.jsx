import React, { useState, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import PgThemes from "./pgThemes";
import GameBoard from "./GameBoard"
import Buttons from './Buttons';
//import UserThemeBox from "./UserThemeBox.jsx";
import axios from "axios";



const SERVER= import.meta.env.VITE_SERVER;

const MagnetBoard = () => {
  const [board, setBoard] = useState(Array.from({ length: 5 }, () => Array.from({ length: 8 }, () => ({ value: "", occupied: false }))));
  const [selectedTile, setSelectedTile] = useState('');
  const [selectedSquare, setSelectedSquare] = useState('');
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [title, setTitle] = useState('');
  const [selectedTileData, setSelectedTileData] = useState('');
  const [selectedSquareData, setSelectedSquareData] = useState('');

  const { getIdTokenClaims, isAuthenticated } = useAuth0();


//<------------------- HANDLE USER UI FUNCTIONS ------------------->
//Select tile to use

const selectTileFunction = (index, value) => {

   const tileIndex= index;
   const tileData = value;
   
    setSelectedTile(tileIndex);
    setSelectedTileData(tileData);
 
    
}

//Select square on the board

const selectSquareFunction = (row, col, value) =>
{
const square = {row, col};
const squarevalue = value;

setSelectedSquare(square);
setSelectedSquareData(squarevalue);


}

useEffect(() => {
  console.log('Selected Tile', selectedTile, selectedTileData);
}, [selectedTile, selectedTileData]);
useEffect(() => {
  console.log('Selected Square', selectedSquare, selectedSquareData);
}, [selectedSquare, selectedSquareData]);

//Show selected square through CSS
const handleSelect = (e) => {

  const selectedthing = e.target.tagName.toLowerCase() === 'div' ? e.target : e.target.parentElement;

  for (let childelement of selectedthing.parentElement.children) {
    childelement.classList.remove('SELECTED');
  }

  selectedthing.classList.add('SELECTED');
  console.log(selectedthing.parentElement);

  
}
//Show selected tile through CSS
const handleTileSelect = (e) => {

 
    const selectedthing = e.target;
  
    for (let childelement of selectedthing.parentElement.children) {
      childelement.classList.remove('SELECTEDTILE');
    }
  
    selectedthing.classList.add('SELECTEDTILE');
    console.log(selectedthing.parentElement);
  
    
  }


//Move string from tile to board function
const moveSelectedTileToSquare = () => {
  

  if (selectedTile !== '' && selectedSquare !== '') {
    const { row, col } = selectedSquare;
    const tileValue = selectedTileData;

    // Check if the selected square is empty
    if (!board[row][col].occupied) {
      const availableSpace = 10 * (5 - col);


      // Check if the tile value can fit in the available space
     
      if (tileValue.length <= availableSpace) {
        const updatedBoard = [...board];

        // Update the board with the selected tile value
        for (let i = 0; i < tileValue.length; i += 10) {
          const slice = tileValue.slice(i, i + 10);
          const rowIndex = row;
          const colIndex = col + i / 10;

          const position = rowIndex * 5 + colIndex;

          updatedBoard[Math.floor(position / 5)][position % 5].value = slice;
          updatedBoard[Math.floor(position / 5)][position % 5].occupied = true;
        } 

          const gameBoardElement = document.getElementById('gameBoard');
        const squareGridElements = gameBoardElement.children;

        // Loop through and remove a class from each child
        for (const element of squareGridElements) {
          element.classList.remove('SELECTED');
        }

        const tileholderElement = document.getElementById('tileholder');
        const selectedTileElements = tileholderElement.querySelectorAll('.SELECTEDTILE');

        // Loop through and remove a class from each selected tile
        for (const element of selectedTileElements) {
          element.classList.remove('SELECTEDTILE');
        }
      
            
        // Deselect the tile and square
        setSelectedTile('');
        setSelectedTileData('');
        setSelectedSquare('');
        
        setBoard(updatedBoard);

        console.log('Board updated:', board);
      } 
    } else {
      console.log('Selected square is already occupied');
    }
  } else {
    console.log('No selected tile or square');
  }
};

//Clear value from Selected square
const clearSelectedSquare = () => {
  if (selectedSquare !== '') {
    const { row, col } = selectedSquare;

    const updatedBoard = [...board];
    updatedBoard[row][col] = { value: '', occupied: false };

    const gameBoardElement = document.getElementById('gameBoard');
    const squareGridElements = gameBoardElement.children;

    // Loop through and remove a class from each child
    for (const element of squareGridElements) {
      element.classList.remove('SELECTED');
    }


    // Deselect the tile and square
    setSelectedTile('');
    setSelectedTileData('');
    setSelectedSquare('');
  

    // Update the board
    setBoard(updatedBoard);

    console.log('Square cleared:', updatedBoard);
  } else {
    console.log('No selected square');
  }
};

//Reset Board
const resetBoard = () => {
  const initialBoard = Array.from({ length: 5 }, () =>
    Array.from({ length: 8 }, () => ({ value: '', occupied: false }))
  );

    setBoard(initialBoard);
  
}


//Make a joined string function -- stretch goal to read out whole poem in one string easily.
const joinStringFunction = (arrayOfArrays) => {
  let result = '';

  for (const array of arrayOfArrays) {
    for (const obj of array) {
      result += obj.value;
    }
  }

  return result;
} 

//Set Poem Title
const setPoemTitle = (e) => {
  const value= e?.target?.value;
  setTitle(value);

}

//Toggle Title Div
const toggleTitleDiv = (e) => {
  setIsDisplayed(!isDisplayed);
}


//<------------------- HANDLE USER CRUD FUNCTIONS ------------------->
//get Auth0 token
const getToken = () => {
  return getIdTokenClaims()
  .then(res => res.__raw)
  .catch(error => console.log('Error getting token:', error));
}

const savePoemToDB= (board, title) => {
  console.log('post poem running')

  const jwtPromise = getToken();
  const url = `${SERVER}/poems`

  jwtPromise
    .then(jwt => {
      const config = {
        headers: { "Authorization": `Bearer ${jwt}` }
      };

      const postData = {
        board: board,
        title: title
      };
     /* if (isEditing == true) {
        handleUpdate(board, title)
      }
      else{*/
      return axios.post(url, postData, config);
    })
    .then(response => {
      let newPoemtitle = response.title;
      window.alert(`Poem Created: ${newPoemtitle}`);
    })
    .catch(error => {
      console.error('Error posting poem:', error);
    });
}


const handleUpdate = (poemToUpdate, title) => {
  console.log('HandleUpdate running');

  if (!poemToUpdate._id) {
    console.error('Invalid poem ID');
    return;
}
const jwtPromise = getToken();
  const url = `${SERVER}/poems`

  jwtPromise
  .then(jwt => {
    const config = {
      headers: { "Authorization": `Bearer ${jwt}` }
    };
  
    return axios.put(`${url}/${poemToUpdate._id}`, poemToUpdate, title, config);
  })
  .then(response => {
    let newPoemtitle = response.title;
    Alert(`Poem Updated: ${newPoemtitle}`);
  })
  .catch(error => {
    console.error('Error updating poem:', error);
  });
}
 

//<-------------------  BOARD --------------------------------------->

    return (
        
        <div id="BoardPageContainer" aria-label="Magnet Poem Board Page Container"  className="p-8 max-w mx-auto">
        <PgThemes selectTileFunction={selectTileFunction} handleTileSelect={handleTileSelect} getToken={getToken} isAuthenticated={isAuthenticated} />

        <Buttons board={board} moveSelectedTileToSquare={moveSelectedTileToSquare} clearSelectedSquare={clearSelectedSquare}
        setPoemTitle={setPoemTitle} toggleTitleDiv={toggleTitleDiv} savePoemToDB={savePoemToDB} getToken={getToken} resetBoard={resetBoard}/>
        <GameBoard board={board} setSelectedSquare={selectSquareFunction} handleSelect={handleSelect} />

      
       

        </div> 
      
    );

}


export default MagnetBoard;

