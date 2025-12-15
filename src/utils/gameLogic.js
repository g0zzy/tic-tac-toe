/**
 * Tic Tac Toe Game Logic
 * Pure functions for game state management
 */

export const PLAYERS = {
  X: 'X',
  O: 'O',
};

export const WINNING_LINES = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal top-left to bottom-right
  [2, 4, 6], // diagonal top-right to bottom-left
];

/**
 * Creates an empty game board
 * @returns {Array<null>} Array of 9 null values
 */
export const createEmptyBoard = () => Array(9).fill(null);

/**
 * Calculates if there's a winner
 * @param {Array} squares - Current board state
 * @returns {Object|null} Winner info with player and winning line, or null
 */
export const calculateWinner = (squares) => {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        line,
      };
    }
  }
  return null;
};

/**
 * Checks if the game is a draw
 * @param {Array} squares - Current board state
 * @returns {boolean} True if game is a draw
 */
export const isDraw = (squares) => {
  return !calculateWinner(squares) && squares.every((square) => square !== null);
};

/**
 * Checks if a move is valid
 * @param {Array} squares - Current board state
 * @param {number} index - Square index to check
 * @returns {boolean} True if move is valid
 */
export const isValidMove = (squares, index) => {
  return !calculateWinner(squares) && squares[index] === null;
};

/**
 * Makes a move and returns new board state
 * @param {Array} squares - Current board state
 * @param {number} index - Square index to play
 * @param {string} player - Current player (X or O)
 * @returns {Array} New board state
 */
export const makeMove = (squares, index, player) => {
  const newSquares = [...squares];
  newSquares[index] = player;
  return newSquares;
};

/**
 * Gets the next player
 * @param {string} currentPlayer - Current player
 * @returns {string} Next player
 */
export const getNextPlayer = (currentPlayer) => {
  return currentPlayer === PLAYERS.X ? PLAYERS.O : PLAYERS.X;
};

/**
 * Gets game status message
 * @param {Object|null} result - Winner result object
 * @param {boolean} gameIsDraw - Whether game is a draw
 * @param {string} currentPlayer - Current player
 * @returns {Object} Status object with message and type
 */
export const getGameStatus = (result, gameIsDraw, currentPlayer) => {
  if (result) {
    return {
      message: `${result.winner} wins!`,
      type: `winner-${result.winner.toLowerCase()}`,
    };
  }
  if (gameIsDraw) {
    return {
      message: "It's a draw!",
      type: 'draw',
    };
  }
  return {
    message: currentPlayer,
    type: `turn-${currentPlayer.toLowerCase()}`,
  };
};
