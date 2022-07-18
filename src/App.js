import './index.css';
import Board from './components/Board';
import { useState } from 'react';
import { calculateWinner } from './winnerHelper';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const winner = calculateWinner(board);
  const currentPlayer = isX ? 'X' : 'O';

  const handleClick = (index) => {
    const boardCopy = [...board];
    if (winner || boardCopy[index]) return;
    boardCopy[index] = currentPlayer;
    setBoard(boardCopy);
    setIsX(!isX);
  };

  const newGame = () => {
    setIsX(true);
    setBoard(Array(9).fill(null));
  };

  return (
    <div className='App'>
      <main>
        <h2>Tic Tac Toe</h2>
        <Board squares={board} handleClick={handleClick} />
        <p>
          {winner ? `Winner: ${winner}` : `Current Player: ${currentPlayer}`}
        </p>
        <button onClick={newGame}>New Game</button>
      </main>
    </div>
  );
}

export default App;
