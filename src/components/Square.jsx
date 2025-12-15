import PropTypes from 'prop-types';

/**
 * Square component - Renders a single game square
 * @param {Object} props
 * @param {string|null} props.value - Current square value ('X', 'O', or null)
 * @param {Function} props.onClick - Click handler
 * @param {boolean} props.isWinning - Whether this square is part of winning line
 * @param {number} props.index - Square index for animation delay
 */
function Square({ value, onClick, isWinning, index }) {
  const classNames = [
    'square',
    'animate-square-appear',
    value && 'square--filled',
    value === 'X' && 'square--x',
    value === 'O' && 'square--o',
    isWinning && 'square--winning',
    isWinning && 'animate-winning-square',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={classNames}
      onClick={onClick}
      style={{ animationDelay: `${index * 0.05}s` }}
      aria-label={value ? `Square ${index + 1}: ${value}` : `Square ${index + 1}: empty`}
    >
      {value && (
        <span className="square__mark animate-mark-appear">{value}</span>
      )}
    </button>
  );
}

Square.propTypes = {
  value: PropTypes.oneOf(['X', 'O', null]),
  onClick: PropTypes.func.isRequired,
  isWinning: PropTypes.bool,
  index: PropTypes.number.isRequired,
};

Square.defaultProps = {
  value: null,
  isWinning: false,
};

export default Square;
