import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button';

describe('Loading button', () => {
    it('renders correctly', () => {
        const handleEvent = jest.fn();
        const {tree} = render(<Button number={1} handleEvent={handleEvent}/>)
        expect(tree).toMatchSnapshot();   
    });
})