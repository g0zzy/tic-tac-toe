import PropTypes from 'prop-types';

/**
 * Button component - Reusable button with style variants
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button content
 * @param {Function} props.onClick - Click handler
 * @param {string} props.variant - Button style variant
 * @param {string} props.className - Additional CSS classes
 */
function Button({ children, onClick, variant, className }) {
  const classNames = ['btn', `btn--${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classNames} onClick={onClick}>
      <span className="btn__text">{children}</span>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  className: '',
};

export default Button;
