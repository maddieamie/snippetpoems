import React, { useState, useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from "react-router-dom";
import PgThemes from "./pgThemes";
import GameBoard from "./GameBoard"
import Buttons from './Buttons';
import userThemeBox from "./userThemeBox";
import axios from "axios";



const SERVER= import.meta.env.VITE_SERVER;

const MagnetBoard = ({ location }) => {
 /* constructor() {
    super();
    // Initialize the game board with an array of rows and columns
    this.state = {
      board: Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => ({ value: "", occupied: false }))),
      selectedTileData: '',
      selectedSquareData: '',
      selectedTile: '',
      selectedSquare: '',
      isDisplayed: false,
      title: ''
      
    };
    
  } */

  const navigate = useNavigate();
  const [board, setBoard] = useState(Array.from({ length: 8 }, () => Array.from({ length: 5 }, () => ({ value: "", occupied: false }))));
  const [selectedTile, setSelectedTile] = useState('');
  const [selectedSquare, setSelectedSquare] = useState('');
  const [isDisplayed, setIsDisplayed] = useState(false);
  const [title, setTitle] = useState('');
  const [selectedTileData, setSelectedTileData] = useState('');
  const [selectedSquareData, setSelectedSquareData] = useState('');

  const { getIdTokenClaims } = useAuth0();

  useEffect(() => {
    handlePropsAndLocation();
  }, [location]);

  const handlePropsAndLocation = () => {
    const { state: { isEditing, poemData } = {} } = location;

    if (isEditing) {
      // Handle the poem data as needed (e.g., update internal state)
      console.log('Editing poem:', poemData);

      // Example: Set the board state with the poemData (you may need to adjust this based on your data structure)
      setBoard(poemData ? poemData.board : board);
      setTitle(poemData ? poemData.title : title);
    }
  };



//<------------------- HANDLE USER UI FUNCTIONS ------------------->
//Select tile to use

const selectTileFunction = (index, value) => {

   const tileIndex= index;
   const tileData = value;
   
    setSelectedTile(tileIndex);
    setSelectedTileData(tileData);
 
    console.log('Selected Tile', selectedTile, selectedTileData);
}

//Select square on the board

const selectSquareFunction = (row, col, value) =>
{
const square = {row, col};
const squarevalue = value;

setSelectedSquare(square);
setSelectedSquareData(squarevalue);
console.log('Selected Square', selectedSquare, selectedSquareData);

}

//Show selected square through CSS
const handleSelect = (e) => {

  const selectedthing = e.target;

  for (let childelement of selectedthing.parentElement.children) {
    childelement.classList.remove('SELECTED');
  }

  selectedthing.classList.add('SELECTED');
  //console.log(selectedthing.parentElement);

  
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
  const { selectedTile, selectedTileData, selectedSquare } = this.state;

  /*if (selectedTile !== '' && selectedSquare !== '') {
    const { row, col } = selectedSquare;
    const tileValue = selectedTileData;

    // Check if the selected square is empty
    if (!board[row][col].occupied) {
      const availableSpace = 80 - col; // Calculate available space in the row

      // Check if the tile value can fit in the available space
      // square grid const wordsArray = sentence.split(/\s+/); split by word, maybe later
      if (tileValue.length <= availableSpace) {
        const updatedBoard = [...board];

        // Update the board with the selected tile value
        for (let i = 0; i < tileValue.length; i += 10) {
          const slice = tileValue.slice(i, i + 10);
          const rowIndex = row;
          const colIndex = col + i / 10;

          const position = rowIndex * 8 + colIndex;

          updatedBoard[Math.floor(position / 8)][position % 8].value = slice;
          updatedBoard[Math.floor(position / 8)][position % 8].occupied = true;
        } */

        if (selectedTile !== '' && selectedSquare !== '') {
          const { row, col } = selectedSquare;
          const tileValue = selectedTileData;
      
          // Check if the selected square is empty
          if (!board[row][col].occupied) {
            const availableSpace = 8 - col; // Calculate available space in the row
      
            // Check if the tile value can fit in the available space
            if (tileValue.length <= availableSpace) {
              const updatedBoard = [...board];
      
              // Function to split the value either by 10 characters or by spaces
              const splitValue = (value) => {
                const wordsArray = value.split(/\s+/); // Split by spaces
                const result = [];
      
                for (let i = 0; i < wordsArray.length; i++) {
                  const word = wordsArray[i];
                  for (let j = 0; j < word.length; j += 10) {
                    result.push(word.slice(j, j + 10));
                  }
                }
      
                return result;
              };
      
              // Update the board with the selected tile value
              const slicedValues = splitValue(tileValue);
              for (let i = 0; i < slicedValues.length; i++) {
                const slice = slicedValues[i];
                const rowIndex = row;
                const colIndex = col + i;
      
                if (colIndex < 8) {
                  const position = rowIndex * 8 + colIndex;
      
                  updatedBoard[Math.floor(position / 8)][position % 8].value = slice;
                  updatedBoard[Math.floor(position / 8)][position % 8].occupied = true;
                } else {
                  console.log("Tile value exceeds available space");
                  break;
                }
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
  setSelectedSquare('');

}

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

//Set Poem Title
const setPoemTitle = (e) => {
  setTitle(e.target.value);
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

      if (isEditing == true) {
        handleUpdate(board, title)
      }
      else{
      return axios.post(url, board, title, config);}
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
        <PgThemes selectTileFunction={selectTileFunction} handleTileSelect={handleTileSelect} getToken={getToken} />

        <Buttons board={board} moveSelectedTileToSquare={moveSelectedTileToSquare} clearSelectedSquare={clearSelectedSquare}
        setPoemTitle={setPoemTitle} toggleTitleDiv={toggleTitleDiv} savePoemToDB={savePoemToDB} getToken={getToken} resetBoard={resetBoard}/>
        <GameBoard board={board} setSelectedSquare={selectSquareFunction} handleSelect={handleSelect} />

        <userThemeBox getToken={getToken} />
       

        </div> 
      
    );

}


export default MagnetBoard;

