import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';

test('renders Header - Contact', () => {
  render(<Header />);
  const [contact] = screen.getAllByText(/contact/i);
  expect(contact);
});
