import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('render component', () => {
    render(<Button />);
  });
  it('render with snapshot', () => {
    expect(render(<Button />)).toMatchSnapshot();
  });
  it('render multiply components', () => {
    render(
      <>
        <Button />
        <Button />
      </>
    );
    expect(screen.queryAllByRole('button').length).toBe(2);
  });
  it('render component with text', () => {
    render(<Button name={'Some'} />);
    expect(screen.getByText(/сообщение/)).toBeInTheDocument();
  });
});
