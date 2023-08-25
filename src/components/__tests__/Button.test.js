/* eslint-disable no-unused-vars */

import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';
import Button from '../Button';

describe('Loading button', () => {
  const handleEvent = jest.fn();

  it('renders correctly', () => {
    const { tree } = render(<Button number={1} handleEvent={handleEvent} />);
    expect(tree).toMatchSnapshot();
  });

  it('Test if button is pressed', () => {
    const { getByText } = render(<Button number={9} handleEvent={handleEvent} />);
    const button = getByText(9);

    fireEvent.click(button);
    expect(handleEvent).toHaveBeenCalled();
  });
});
