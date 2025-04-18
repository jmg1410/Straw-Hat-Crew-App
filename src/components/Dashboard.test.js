import { render, screen, waitFor } from '@testing-library/react';
import Dashboard from './Dashboard';
import * as api from '../api/crewApi';

jest.mock('../api/crewApi');

const mockCrew = [
    {
        id: 1,
        name: 'Luffy',
        role: 'Captain',
        bounty: '3,000,000,000',
        img: '/luffy.avif'
    }
]

test('loads and display crew data', async () => {
    api.getStrawHatCrew.mockResolvedValueOnce(mockCrew);

    render(<Dashboard />);

    expect(screen.getByText(/Thousand Sunny will arrive shortly.../)).toBeInTheDocument()

    await waitFor(() => {
        expect(screen.getByText(/Luffy/)).toBeInTheDocument();
    expect(screen.getByText(/Captain/)).toBeInTheDocument();
    });

    expect (api.getStrawHatCrew).toHaveBeenCalledTimes(1)
});