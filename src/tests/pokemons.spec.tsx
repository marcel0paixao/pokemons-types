import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import Pokemons from "../pages/Pokemons";
import { BrowserRouter, useParams } from 'react-router-dom'

const renderComponent = () => {
    return render(
        <BrowserRouter>
            <Pokemons />
        </BrowserRouter>
    )
}

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn()
}));

(useParams as jest.Mock).mockReturnValue({ type: 'fire' });

describe("Pokemons", () => {
    it("renders Pokemons component", () => {
        const { findByText } = renderComponent();
        waitFor(() => expect(findByText('Pokemons')).toBeInTheDocument());
    });

    it("renders a list of pokemons", () => {
        const { queryAllByTestId } = renderComponent();
        const pokemons = queryAllByTestId('pokemon-item');
        waitFor(() => expect(pokemons.length).toBeGreaterThan(0));
    });
});