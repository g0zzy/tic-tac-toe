import PropTypes from 'prop-types';

/**
 * ScoreCard component - Individual player score display
 */
function ScoreCard({ player, score }) {
  const cardClass = `score-card score-card--${player.toLowerCase()}`;

  return (
    <div className={cardClass}>
      <span className="score-card__label">{player}</span>
      <span className="score-card__value">{score}</span>
    </div>
  );
}

ScoreCard.propTypes = {
  player: PropTypes.oneOf(['X', 'O']).isRequired,
  score: PropTypes.number.isRequired,
};

/**
 * Scoreboard component - Displays scores for both players
 * @param {Object} props
 * @param {Object} props.scores - Object with X and O scores
 */
function Scoreboard({ scores }) {
  return (
    <div className="scoreboard" aria-label="Scoreboard">
      <ScoreCard player="X" score={scores.X} />
      <ScoreCard player="O" score={scores.O} />
    </div>
  );
}

Scoreboard.propTypes = {
  scores: PropTypes.shape({
    X: PropTypes.number.isRequired,
    O: PropTypes.number.isRequired,
  }).isRequired,
};

export default Scoreboard;
