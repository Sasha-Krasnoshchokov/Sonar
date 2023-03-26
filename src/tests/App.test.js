import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders App - About us', () => {
  render(<App />);
  const element = screen.getByText(/about us/i);
  expect(element);
});

test('renders App - <main />', () => {
  render(<App />);
  const [main] = document.getElementsByTagName('main');
  expect(main);
});

test('renders App - <Header />', () => {
  render(<App />);
  const [header] = document.getElementsByTagName('Header');
  expect(header);
});
