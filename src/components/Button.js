import React from 'react';
import './styles.css';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { number, handleEvent } = props;
  if (number === '\u00F7' || number === 'x' || number === '-' || number === '+' || number === '=') {
    return <button type="button" className="button" id="operator" onClick={handleEvent}>{number}</button>;
  } if (number === '0') {
    return <button type="button" className="button" id="zero" onClick={handleEvent}>{number}</button>;
  }
  return <button type="button" className="button" onClick={handleEvent}>{number}</button>;
};

Button.propTypes = {
  number: PropTypes.number.isRequired,
  handleEvent: PropTypes.func.isRequired,
};

export default Button;
