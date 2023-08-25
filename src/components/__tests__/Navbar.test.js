/* eslint-disable no-unused-vars */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Navbar from '../Navbar';

describe('Loading calculator component', () => {
  it('Renders correctly', () => {
    const { tree } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    const title = screen.getByText('Math Magicians');
    expect(title).toBeInTheDocument();
  });

  it('Renders correct links', () => {
    const { tree } = render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    const home = screen.getByRole('link', { name: 'Home' });
    const calc = screen.getByRole('link', { name: 'Calculator' });
    const quote = screen.getByRole('link', { name: 'Quote' });

    expect(home).toHaveAttribute('href', '/');
    expect(calc).toHaveAttribute('href', '/calculator');
    expect(quote).toHaveAttribute('href', '/quote');
  });
});
