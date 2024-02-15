import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders "Hello World" as a text', () => {
    // Arrange
    render(<Greeting />);

    // Act

    // Assert
    const element = screen.getByText('Hello World');
    expect(element).toBeInTheDocument();
  });

  test('renders "It is good to see you!" if the button was NOT clicked', () => {
    render(<Greeting />);

    const element = screen.getByText('It is good to see you!');
    expect(element).toBeInTheDocument();
  });

  test('renders "Changed!" if the button was clicked', () => {
    render(<Greeting />);

    // Act
    const button = screen.getByRole('button');
    userEvent.click(button);

    // Assert
    const element = screen.getByText('Changed!');
    expect(element).toBeInTheDocument();
  });

  test('does NOT render "It is good to see you!" if the button was clicked', () => {
    render(<Greeting />);

    // Act
    const button = screen.getByRole('button');
    userEvent.click(button);

    // Assert
    const element = screen.queryByText('good to see you', { exact: false });
    expect(element).toBeNull();
  });
});
