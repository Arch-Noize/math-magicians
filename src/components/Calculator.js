import React, { useState } from 'react';
import './styles/styles.css';
import Button from './Button';
import calculate from '../logic/calculate';

const numbers = ['AC', '+/-', '%', '\u00F7', '7', '8', '9', 'x', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '='];
const Calculator = () => {
  const [calc, setCalc] = useState({ total: null, next: null, operation: null });
  const { total, next, operation } = calc;

  const handleEvent = (e) => {
    const target = e.target.textContent;
    setCalc(calculate(calc, target));
  };
  return (
    <div className="calc-container">
      <h2>Lets do some math!</h2>
      <div className="calculator">
        <div className="result">{next || total || operation || 0}</div>
        {numbers.map((number) => <Button number={number} key={number} handleEvent={handleEvent} />)}
      </div>
    </div>
  );
};

export default Calculator;
