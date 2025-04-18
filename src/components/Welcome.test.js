import { render , screen } from '@testing-library/react'
import Welcome from './Welcome';

test('updates when props change', () => {
    const { rerender } = render(<Welcome name='Jay' />);
    expect(screen.getByText(/Jay/)).toBeInTheDocument();

    rerender(<Welcome name='Zoro' />);
    expect(screen.getByText(/Zoro/)).toBeInTheDocument();
    expect(screen.queryByText(/Jay/)).not.toBeInTheDocument();
})
