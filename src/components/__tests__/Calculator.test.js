import React from 'react';
import { render } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Loading calculator component', () => {
  it('renders correctly', () => {
    const { tree } = render(<Calculator />);
    expect(tree).toMatchSnapshot();
  });
});
