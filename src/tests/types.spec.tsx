import { fireEvent, render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import Types from "../pages/Types";
import { BrowserRouter } from 'react-router-dom'

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate()
}));

const renderComponent = () => {
    return render(
        <BrowserRouter>
            <Types />
        </BrowserRouter>
    )
}

describe("Types", () => {
    it("renders the types component", () => {
        const { queryByTestId } = renderComponent();
        const typesComponent = queryByTestId('types');
        waitFor(() => expect(typesComponent).toBeInTheDocument());
    });

    it("renders the types component with the correct title", () => {
        const { queryByTestId } = renderComponent();
        const typesComponent = queryByTestId('types');
        waitFor(() => expect(typesComponent).toHaveTextContent('Pokemon types'));
    });

    it("renders the types component with the correct types", () => {
        const { queryByTestId } = renderComponent();

        const typesComponent = queryByTestId('types');

        waitFor(() => expect(typesComponent).toHaveTextContent('Normal'));
        waitFor(() => expect(typesComponent).toHaveTextContent('Fire'));
        waitFor(() => expect(typesComponent).toHaveTextContent('Water'));
        waitFor(() => expect(typesComponent).toHaveTextContent('Electric'));
        waitFor(() => expect(typesComponent).toHaveTextContent('Grass'));
        waitFor(() => expect(typesComponent).toHaveTextContent('Ice'));
        waitFor(() => expect(typesComponent).toHaveTextContent('Fighting'));
        waitFor(() => expect(typesComponent).toHaveTextContent('Poison'));
        waitFor(() => expect(typesComponent).toHaveTextContent('Ground'));
        waitFor(() => expect(typesComponent).toHaveTextContent('Flying'));
        waitFor(() => expect(typesComponent).toHaveTextContent('Psychic'));
        waitFor(() => expect(typesComponent).toHaveTextContent('Bug'));
        waitFor(() => expect(typesComponent).toHaveTextContent('Rock'));
        waitFor(() => expect(typesComponent).toHaveTextContent('Ghost'));
        waitFor(() => expect(typesComponent).toHaveTextContent('Dragon'));
        waitFor(() => expect(typesComponent).toHaveTextContent('Dark'));
        waitFor(() => expect(typesComponent).toHaveTextContent('Steel'));
        waitFor(() => expect(typesComponent).toHaveTextContent('Fairy'));
    });

    it("redirects to the types page", () => {
        const { queryByTestId } = renderComponent();
        const typesComponent = queryByTestId('types');
        waitFor(() => {
            const buttons = typesComponent?.querySelectorAll('button');
            for (const button of buttons!) {
                fireEvent.click(button);

                expect(mockNavigate).toHaveBeenCalledWith(/pokemon-type/i);
            }
        });
    });
});