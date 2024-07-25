import { render, screen } from '@testing-library/react';
import App from './App';
import { act } from 'react'; // 추가

test('renders welcome message', () => {
  act(() => {
    render(<App />);
  });
  const linkElement = screen.getByText(/welcome to 'i6 world'/i); // 실제 존재하는 텍스트로 수정
  expect(linkElement).toBeInTheDocument();
});
