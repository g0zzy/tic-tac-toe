import PropTypes from 'prop-types';
import Square from './Square';

/**
 * Board component - Renders the 3x3 game grid
 * @param {Object} props
 * @param {Array} props.squares - Array of 9 square values
 * @param {Function} props.onSquareClick - Handler for square clicks
 * @param {Array} props.winningLine - Array of winning square indices
 */
function Board({ squares, onSquareClick, winningLine }) {
  return (
    <div className="board animate-board-appear" role="grid" aria-label="Tic Tac Toe board">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onSquareClick(index)}
          isWinning={winningLine.includes(index)}
          index={index}
        />
      ))}
    </div>
  );
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.oneOf(['X', 'O', null])).isRequired,
  onSquareClick: PropTypes.func.isRequired,
  winningLine: PropTypes.arrayOf(PropTypes.number),
};

Board.defaultProps = {
  winningLine: [],
};

export default Board;
