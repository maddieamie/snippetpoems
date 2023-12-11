import React, { Component } from "react";
class GameBoard extends React.Component {
    // Your existing GameBoard component code goes here

    /* <div id="boardSquare1-4" role="text" tabindex="-1" aria-label="1 4: they" data-pos-x="3" data-pos-y="0" data-occupied="true">
    <span class="boardSquareOccupiedString selected">they</span></div>*/
  
    render() {
      const { board, setSelectedSquare, handleSelect } = this.props; 
  
      return (
        <div id="gameBoard" role="group" tabIndex="-1" aria-label="Grid Container.">
          {board.map((row, rowIndex) => (
            row.map((square, colIndex) => {
              const squareId = `boardSquare${rowIndex + 1}-${colIndex + 1}`;
              const ariaLabel = `${rowIndex + 1} ${colIndex + 1}: `;
              const bonusClass = square.occupied ? ('boardSquareOccupiedString') : ('');
  
              return (
                <div
                  key={squareId}
                  id={squareId}
                  role="text"
                  tabIndex="-1"
                  aria-label={`${ariaLabel}${square.value}`}
                  data-pos-x={colIndex}
                  data-pos-y={rowIndex}
                  data-occupied={square.occupied}
                  
              
                  onClick={(e) => {setSelectedSquare(rowIndex, colIndex, square.value); handleSelect(e)}}
                >
                  <span className={bonusClass}>{square.value}</span>
                </div>
              );
            })
          ))}
        </div>
      );
    }
  }
  export default GameBoard;