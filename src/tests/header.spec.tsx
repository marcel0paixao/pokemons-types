import { render } from '@testing-library/react';
import '@testing-library/jest-dom'
import Header from '../components/Header';

describe("Header", () => {
    it("renders a header with the provided title", () => {
        const title = "Header Title";
        const { getByText } = render(<Header title={title} />);
        expect(getByText(title)).toBeInTheDocument();
    });

    it("renders a header without any children", () => {
        const { queryByTestId } = render(<Header title='' />);
        expect(queryByTestId("header-content")).toBeNull();
    });
    
    it("renders a header with a subtitle", () => {
        const subtitle = "Header Subtitle";
        const { getByText } = render(<Header title="Header Title" subtitle={subtitle} />);
        expect(getByText(subtitle)).toBeInTheDocument();
    });
});
