import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import App from './App';
import mockMonsters from './monsters.json';

jest.mock('axios');

describe('App Component', () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockMonsters });
  });

  test('renders Monsters Rolodex title', async () => {
    render(<App />);

    const titleElement = screen.getByRole('heading', { name: /monsters rolodex/i });
    expect(titleElement).toBeInTheDocument();

    await waitFor(() => {
      const monsterNames = screen.getAllByTestId('monster-name');
      expect(monsterNames).toHaveLength(mockMonsters.length);
    });
  });

  test('filters monsters based on search input', async () => {
    render(<App />);

    const inputElement = screen.getByPlaceholderText(/search monsters/i);
    expect(inputElement).toBeInTheDocument();

    fireEvent.change(inputElement, { target: { value: 'Leanne' } });

    await waitFor(() => {
      const monsterNames = screen.getAllByTestId('monster-name');
      expect(monsterNames).toHaveLength(1);
      expect(monsterNames[0]).toHaveTextContent('Leanne Graham');
    });
  });
});
