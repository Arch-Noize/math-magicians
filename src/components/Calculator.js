import React from 'react';
import './styles.css';
import Button from './Button';

const numbers = ['AC', '+/-', '%', '\u00F7', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
const Calculator = () => (
  <div className="calculator">
    <div className="result">0</div>
    {numbers.map((number) => <Button number={number} key={number} />)}
  </div>
);

export default Calculator;
