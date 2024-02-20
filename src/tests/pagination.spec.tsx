import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import Pagination from '../components/Pagination';

describe('Pagination', () => {
    it('renders the pagination component', () => {
        const { queryByTestId } = render(<Pagination pagination={{
            actualPage: 1,
            totalPages: 1,
            nextPage: 2,
            previousPage: 1,
            totalItems: 0,
            itemsPerPage: 10,
        }} setPagination={() => {}} />);
        const paginationComponent = queryByTestId('pagination');
        waitFor(() => expect(paginationComponent).toBeInTheDocument());
    });

    it('displays the correct page number', () => {
        const { queryByTestId } = render(<Pagination pagination={{
            actualPage: 3,
            totalPages: 5,
            nextPage: 4,
            previousPage: 2,
            totalItems: 50,
            itemsPerPage: 10,
        }} setPagination={() => {}} />);
        const pageNumber = queryByTestId('page-number');
        waitFor(() => expect(pageNumber).toHaveTextContent('3'));
    });

    it('disables previous button on first page', () => {
        const { queryByTestId } = render(<Pagination pagination={{
            actualPage: 1,
            totalPages: 5,
            nextPage: 2,
            previousPage: 1,
            totalItems: 50,
            itemsPerPage: 10,
        }} setPagination={() => {}} />);
        const previousButton = queryByTestId('previous-button');
        waitFor(() =>  expect(previousButton).toBeDisabled());
    });

    it('disables next button on last page', () => {
        const { queryByTestId } = render(<Pagination pagination={{
            actualPage: 5,
            totalPages: 5,
            nextPage: 6,
            previousPage: 4,
            totalItems: 50,
            itemsPerPage: 10,
        }} setPagination={() => {}} />);
        const nextButton = queryByTestId('next-button');

        waitFor(() => expect(nextButton).toBeDisabled());
    });
});
