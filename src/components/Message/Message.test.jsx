import React from 'react';
import { render } from '@testing-library/react';
import { Message } from './Message';
import '@testing-library/jest-dom';

describe('Message', () => {
  it('render component', () => {
    const mockFn = jest.fn();
    render(<Message value="" setValue={mockFn} />);
  });
});
