import Button from '../components/Button';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'

describe("Button", () => {
    it("renders a button with the provided label", () => {
        const label = "Click me";
        const { getByText } = render(<Button label={label} onclick={() => {}} />);
        expect(getByText(label)).toBeInTheDocument();
    });

    it("calls the provided onclick function when clicked", () => {
        const onclickMock = jest.fn();
        const { getByText } = render(<Button label="Click me" onclick={onclickMock} />);
        const button = getByText("Click me");
        fireEvent.click(button);
        expect(onclickMock).toHaveBeenCalled();
    });
});