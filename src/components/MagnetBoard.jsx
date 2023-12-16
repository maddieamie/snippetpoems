import React, { useState, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import PgThemes from "./pgThemes";
import GameBoard from "./GameBoard"
import Buttons from './Buttons';
import UserThemeBox from "./userThemeBox";
//import UserThemeBox from "./UserThemeBox.jsx";
import axios from "axios";
import { useNavigate } from "react-router-dom";



const SERVER= import.meta.env.VITE_SERVER;

const MagnetBoard = (props) => {
  const [board, setBoard] = useState([])
  const [selectedTile, setSelectedTile] = useState('');
  const [selectedSquare, setSelectedSquare] = useState('');
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [title, setPoemTitle] = useState('');
  const [selectedTileData, setSelectedTileData] = useState('');
  const [selectedSquareData, setSelectedSquareData] = useState('');
  

  const { getIdTokenClaims } = useAuth0();

  const { routerData, setRouterData, authData } = props;
  const navigate = useNavigate();
  

////<------------------- HANDLE APP PROPS       ------------------->

const createBoard = async () => {
  try {
    console.log(routerData);
    const oldPoem = routerData?.poem;

    if (oldPoem && oldPoem.length > 0) {
      // If oldPoem is defined and is an array
      const poemboard = oldPoem.map((row, rowIndex) => (
        row.map((cell, cellIndex) => ({
          value: cell.value || '',
          occupied: cell.occupied || false,
          row: rowIndex, // Optionally add the row and col indices for reference
          col: cellIndex,
        }))
      ));
      setBoard(poemboard);
    } else {
      //
      console.log('empty board loading instead of the old data')
      const initialBoard = Array.from({ length: 8 }, () =>
        Array.from({ length: 5 }, () => ({ value: '', occupied: false }))
      );
      setBoard(initialBoard);
    }
  } catch (error) {
    console.log('Error creating Board', error);
  }
};




//initialize board
useEffect(() => {createBoard(), console.log("Router Data:", routerData);
}, []);

//Update square + tile states
useEffect(() => {
  console.log('Selected Tile', selectedTile, selectedTileData);
}, [selectedTile, selectedTileData]);
useEffect(() => {
  console.log('Selected Square', selectedSquare, selectedSquareData);
}, [selectedSquare, selectedSquareData]);

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
  
    const updatedBoard = [...board];
    const regex = /\s/g;
    const spacey = regex.test(tileValue);
  
    if (spacey) {
      const tileArray = tileValue.split(/\s+/); // Split by one or more whitespaces
  
      for (let i = 0; i < tileArray.length; i++) {
        const word = tileArray[i];
        const rowIndex = row;
        const colIndex = col + i;
  
        if (colIndex < 5) {
          const position = rowIndex * 5 + colIndex;
  
          // Check if the selected square is empty
          if (!updatedBoard[Math.floor(position / 5)][position % 5].occupied) {
            updatedBoard[Math.floor(position / 5)][position % 5].value = word;
            updatedBoard[Math.floor(position / 5)][position % 5].occupied = true;
          } else {
            console.log('Selected square is already occupied');
          }
        } else {
          console.log('Not enough space in the row for that tile');
          // You might want to throw an error or handle this situation accordingly
          // Example: throw new Error('Not enough space in the row for that tile');
          return;
        }
      }
    } else {  // If spacey is not true, fill the entire tileValue in the specified square
      const position = row * 5 + col;
  
      // Check if the selected square is empty
      if (!updatedBoard[Math.floor(position / 5)][position % 5].occupied) {
        updatedBoard[Math.floor(position / 5)][position % 5].value = tileValue;
        updatedBoard[Math.floor(position / 5)][position % 5].occupied = true;
      } else {
        console.log('Selected square is already occupied');
      }
    }
  
    setBoard(updatedBoard);
  
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
  
    console.log('Board updated:', updatedBoard);
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
  const initialBoard = Array.from({ length: 8 }, () =>
    Array.from({ length: 5 }, () => ({ value: '', occupied: false }))
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



//<------------------- HANDLE USER CRUD FUNCTIONS ------------------->
//get Auth0 token
const getToken = () => {
  return getIdTokenClaims()
  .then(res => res.__raw)
  .catch(error => {console.log('Error getting token:', error)});
}

const callDB = () => {
  console.log(title);
  savePoemToDB(board, title);
}

const savePoemToDB = (board, title) => {
  console.log('post poem running')

  const jwtPromise = getToken();
  const url = `${SERVER}/poems`

  jwtPromise
    .then(jwt => {
      console.log('JWT from SavePoem', jwt);
      const config = {
        headers: { "Authorization": `Bearer ${jwt}` }
      };

      const postData = {
        title: title,
        poem: board
      };
      console.log(postData);

     if (routerData && routerData?.poem) {
        handleUpdate(board, title, routerData)
      }
      else{
      return axios.post(url, postData, config);
    }})
    .then(response => {
      window.alert(`Poem Created: ${response.data}`);
    })
    .catch(error => {
      console.error('Error posting poem:', error);
    });
}


const handleUpdate = (board, title, routerData) => {
  console.log('HandleUpdate running');

const id = routerData._id;

const jwtPromise = getToken();
  const url = `${SERVER}/poems`

  jwtPromise
  .then(jwt => {
    const config = {
      headers: { "Authorization": `Bearer ${jwt}` }
    };

    const postData = {
      title: title,
      board: board
    };
  
    return axios.put(`${url}/${id}`, postData, config);
  })
  .then((response) => {
    const update = response;
    const confirmed = window.confirm(`Poem Updated. Do you want to go to your profile?`);

    if (confirmed) {
      // User clicked "OK," navigate to the profile
      setRouterData({});
      navigate('/profile');
    }
  })
  .catch(error => {
    console.error('Error updating poem:', error);
  });

}
 

//<-------------------  BOARD --------------------------------------->

    return (
        
        <div id="BoardPageContainer" aria-label="Magnet Poem Board Page Container"  className="p-8 max-w mx-auto">
        <PgThemes authData={authData} selectTileFunction={selectTileFunction} handleTileSelect={handleTileSelect} />

        <Buttons authData={authData} board={board} moveSelectedTileToSquare={moveSelectedTileToSquare} clearSelectedSquare={clearSelectedSquare}
        setPoemTitle={setPoemTitle} callDB={callDB} getToken={getToken} resetBoard={resetBoard}/>
        <GameBoard board={board} setSelectedSquare={selectSquareFunction} handleSelect={handleSelect} />

        <UserThemeBox getToken={getToken} selectTileFunction={selectTileFunction} handleTileSelect={handleTileSelect} />
       

        </div> 
      
    );

}


export default MagnetBoard;

