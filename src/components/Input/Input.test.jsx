import React from 'react';
import { render } from '@testing-library/react';
import { Input } from './Input';
import '@testing-library/jest-dom';

describe('Input', () => {
  it('render component', () => {
    render(<Input />);
  });
  it('render with snapshot', () => {
    expect(render(<Input />)).toMatchSnapshot();
  });
});
