import React from 'react';
import Square from './Square';

export default function Board(props) {
  const { squares, handleClick } = props;
  return (
    <container>
      {squares.map((square, index) => (
        <Square
          key={index}
          square={square}
          handleClick={() => handleClick(index)}
        />
      ))}
    </container>
  );
}
