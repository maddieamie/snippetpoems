import React, { Component } from "react";
import PgThemes from "./pgThemes";
import GameBoard from "./GameBoard"
import Buttons from './Buttons';

class MagnetBoard extends Component {
  constructor() {
    super();
    // Initialize the game board with an array of rows and columns
    this.state = {
      board: Array.from({ length: 10 }, () => Array.from({ length: 10 }, () => ({ value: "", occupied: false }))),
      selectedTileData: '',
      selectedSquareData: '',
      selectedTile: '',
      selectedSquare: ''
      
    };
    
  }

  //square grid const wordsArray = sentence.split(/\s+/);



//Select tile to use

setSelectedTile = (index, value) => {

   const tileData = value;
   const tileIndex= index;
   
   

   this.setState({
    selectedTile: tileIndex,
    selectedTileData: tileData
  }, () => {console.log('Selected Tile', this.state.selectedTile, this.state.selectedTileData)});


  

}

//Select square on the board

setSelectedSquare = (row, col, value) =>
{

const {board} = this.state;
const square = {row, col};
const squarevalue = value;

this.setState({selectedSquare: square, selectedSquareData: squarevalue}, () => {console.log('Selected Square', this.state.selectedSquare, this.state.selectedSquareData)});

}

handleSelect = (e) => {

  const { board } = this.state;
  const selectedthing = e.target;

  for (let childelement of selectedthing.parentElement.children) {
    childelement.classList.remove('SELECTED');
  }

  selectedthing.classList.add('SELECTED');
  //console.log(selectedthing.parentElement);

  
}

//Move string from tile to board function
moveSelectedTileToSquare = () => {
  const {
    board,
    selectedTile,
    selectedTileData,
    selectedSquare,
   
  } = this.state;

  if (selectedTile !== '' && selectedSquare !== '') {
    const { row, col } = selectedSquare;
    const tileValue = selectedTileData;

    // Check if the selected square is empty
    if (!board[row][col].occupied) {
      const availableSpace = 100 - col; // Calculate available space in the row

      // Check if the tile value can fit in the available space
      if (tileValue.length <= availableSpace) {
        const updatedBoard = [...board];

        // Update the board with the selected tile value
        for (let i = 0; i < tileValue.length; i += 10) {
          const slice = tileValue.slice(i, i + 10);  
          const rowIndex = row;
          const colIndex = col + i / 10;

            const position = rowIndex * 10 + colIndex;

            updatedBoard[Math.floor(position / 10)][position % 10].value =
              slice;
            updatedBoard[Math.floor(position / 10)][position % 10].occupied = true;
        }

        // Deselect the tile and square
        this.setState(
          {
            selectedTile: '',
            selectedTileData: '',
            selectedSquare: '',
            board: updatedBoard
          },
          () => {
            console.log('Board updated:', this.state.board);
          }
        );
      } else {
        console.log('Selected tile value exceeds available space');
      }
    } else {
      console.log('Selected square is already occupied');
    }
  } else {
    console.log('No selected tile or square');
  }
};

//Make a joined string function
joinArrayOfObjects(arrayOfArrays) {
  let result = '';

  for (const array of arrayOfArrays) {
    for (const obj of array) {
      result += obj.value;
    }
  }

  return result;
}


  

  render() {
    const { board } = this.state;

    return (
        
        <div id="BoardPageContainer" aria-label="Magnet Poem Board Page Container"  className="p-8 max-w mx-auto">
        <PgThemes selectedTile={this.selectedTile} setSelectedTile={this.setSelectedTile}/>
        <Buttons board={board} moveSelectedTileToSquare={this.moveSelectedTileToSquare}/>
        <GameBoard board={board} setSelectedSquare={this.setSelectedSquare} handleSelect={this.handleSelect} />
       

        </div> 
      
    );
  }
}

export default MagnetBoard;
