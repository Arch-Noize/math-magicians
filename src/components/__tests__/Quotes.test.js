import React from 'react';
import { render , waitFor } from '@testing-library/react';
import Quotes from '../Quotes';

describe('Loading quotes', () => {
    it('renders correctly', () => {
        waitFor(() => {
            const {tree} = render(<Quotes />)
            expect(tree).toMatchSnapshot(); 
        })   
    });
})
