import userEvent from "@testing-library/user-event";
import Login from './Login';
import { Provider } from 'react-redux'
import { store } from '../redux/store'
import { BrowserRouter } from "react-router-dom";

beforeEach(() => {
    localStorage.clear(); //clearing local storage before tests
});

test('logs in and saves token', async () => {
    render(
        <Provider store={store}>
            <BrowserRouter>
             <Login />            
            </BrowserRouter>
        </Provider>
    )

    userEvent.type(screen.getByPlaceholderText(/usernam/i), 'luffy');
    userEvent.type(screen.getByPlaceholderText(/password/i), 'gomugomuno');

    userEvent.click(screen.getByTestId('loginBtn'));

    await waitFor(() => {
        expect(localStorage.getItem('token')).toBe('strawhat-crew-123');
    })
})