import { useState, useCallback } from 'react';
import Board from './Board';
import Scoreboard from './Scoreboard';
import Status from './Status';
import Button from './Button';
import {
  PLAYERS,
  createEmptyBoard,
  calculateWinner,
  isDraw,
  isValidMove,
  makeMove,
  getNextPlayer,
  getGameStatus,
} from '../utils';

/**
 * Game component - Main game container and state manager
 * Orchestrates all child components and game logic
 */
function Game() {
  const [currentPlayer, setCurrentPlayer] = useState(PLAYERS.X);
  const [squares, setSquares] = useState(createEmptyBoard);
  const [scores, setScores] = useState({ X: 0, O: 0 });

  const result = calculateWinner(squares);
  const gameIsDraw = isDraw(squares);
  const winningLine = result?.line || [];
  const isGameOver = Boolean(result) || gameIsDraw;
  const { message, type } = getGameStatus(result, gameIsDraw, currentPlayer);

  const handleSquareClick = useCallback(
    (index) => {
      if (!isValidMove(squares, index)) {
        return;
      }

      const newSquares = makeMove(squares, index, currentPlayer);
      setSquares(newSquares);

      const newResult = calculateWinner(newSquares);
      if (newResult) {
        setScores((prev) => ({
          ...prev,
          [newResult.winner]: prev[newResult.winner] + 1,
        }));
      }

      setCurrentPlayer(getNextPlayer(currentPlayer));
    },
    [squares, currentPlayer]
  );

  const handleReset = useCallback(() => {
    setSquares(createEmptyBoard());
    setCurrentPlayer(PLAYERS.X);
  }, []);

  return (
    <div className="game">
      <h1 className="game__title animate-title-glow">Tic Tac Toe</h1>
      <p className="game__subtitle">Reimagined</p>

      <Scoreboard scores={scores} />

      <Status message={message} type={type} isGameOver={isGameOver} />

      <Board
        squares={squares}
        onSquareClick={handleSquareClick}
        winningLine={winningLine}
      />

      <Button onClick={handleReset} className="game__reset">
        New Game
      </Button>

      <p className="game__footer">Click any square to play</p>
    </div>
  );
}

export default Game;
