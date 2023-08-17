import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

function Button(props) {
  const { number } = props;
  if (number === '\u00F7' || number === 'x' || number === '-' || number === '+' || number === '=') {
    return <button type="button" className="button" id="operator">{number}</button>;
  } if (number === '0') {
    return <button type="button" className="button" id="zero">{number}</button>;
  }
  return <button type="button" className="button">{number}</button>;
}

Button.propTypes = {
  number: PropTypes.number.isRequired,
};

export default Button;
