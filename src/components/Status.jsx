import PropTypes from 'prop-types';

/**
 * Status component - Displays current game status
 * @param {Object} props
 * @param {string} props.message - Status message to display
 * @param {string} props.type - Status type for styling
 * @param {boolean} props.isGameOver - Whether game has ended
 */
function Status({ message, type, isGameOver }) {
  const messageClass = [
    'status__message',
    `status__message--${type}`,
    type.startsWith('winner') && 'animate-win-pulse',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="status" aria-live="polite">
      <p className="status__label">
        {isGameOver ? 'Game Over' : 'Current Turn'}
      </p>
      <p className={messageClass}>{message}</p>
    </div>
  );
}

Status.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isGameOver: PropTypes.bool,
};

Status.defaultProps = {
  isGameOver: false,
};

export default Status;
