import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button';

it('renders correctly', () => {
    const tree = renderer
      .create(<button type="button" className="button" id="operator" onClick={handleEvent}>{number}</button>)
      .toJSON();
    expect(tree).toMatchSnapshot();
});