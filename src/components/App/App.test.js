import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

test('button has correct initial color', () => {
  render(<App/>);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toHaveStyle({ backgroundColor: 'red', })
});

test('button turns blue when clicked', () => {
  render(<App/>);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  fireEvent.click(colorButton);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue', });
  expect(colorButton.textContent).toBe('Change to red');
});

test('initial conditions', () => {
  render(<App />);

  // check the button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  // check the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('checked checkbox disables button and unchecked checkbox enables button', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkbox);

  expect(checkbox).toBeChecked();
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);

  expect(checkbox).not.toBeChecked();
  expect(colorButton).toBeEnabled();
})

test('disabled button has gray background and reverts to red', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkbox);

  expect(colorButton).toHaveStyle({ backgroundColor: 'gray', })

  fireEvent.click(checkbox);

  expect(colorButton).toHaveStyle({ backgroundColor: 'red', })
});

test('disabled clicked button has gray background and reverts to blue', () => {
  render(<App />);

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(colorButton);
  fireEvent.click(checkbox);

  expect(colorButton).toHaveStyle({ backgroundColor: 'gray', })

  fireEvent.click(checkbox);

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue', })
});
