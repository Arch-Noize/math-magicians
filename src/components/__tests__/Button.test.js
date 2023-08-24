import React from 'react';
// import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';
import Button from '../Button';
import { waitFor } from '@testing-library/react';

it('renders correctly', () => {
    const handleEvent = jest.fn();
    //const {tree} = render(<Button number={1} handleEvent={handleEvent}/>)
    const tree = renderer.create(<Button number={1} handleEvent={handleEvent}/>).toJSON;
    expect(tree).toMatchSnapshot();   
});