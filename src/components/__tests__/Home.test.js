import React from 'react';
import { render } from '@testing-library/react';
import Home from '../Home';

describe('Loading calculator component', () => {
    it('renders correctly', () => {
        const {tree} = render(<Home />)
        expect(tree).toMatchSnapshot();   
    });
})