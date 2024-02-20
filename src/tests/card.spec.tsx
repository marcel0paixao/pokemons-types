import Card from "../components/Card";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'

describe("Card", () => {
    it("renders a card with the provided title", () => {
        const title = "Card Title";
        const { getByText } = render(<Card title={title} />);
        expect(getByText(title)).toBeInTheDocument();
    });

    it("renders a card with the provided children", () => {
        const { getByText } = render(<Card title="Card Title">Card Content</Card>);
        expect(getByText("Card Content")).toBeInTheDocument();
    });

    it("renders a card without a title", () => {
        const { queryByTestId } = render(<Card />);
        expect(queryByTestId("card-title")).toBeNull();
    });

    it("renders a card without any children", () => {
        const { queryByTestId } = render(<Card />);
        expect(queryByTestId("card-content")).toBeNull();
    });
    
    it("renders a card with a subtitle", () => {
        const subtitle = "Card Subtitle";
        const { getByText } = render(<Card title="Card Title" subtitle={subtitle} />);
        expect(getByText(subtitle)).toBeInTheDocument();
    });

    it("renders a card with an image", () => {
        const image = "https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/1.svg";
        const { getByAltText } = render(<Card title="Card Title" image={image} />);
        expect(getByAltText("Card Title")).toBeInTheDocument();
    });

    it("renders a card with a custom className", () => {
        const className = "custom-class";
        const { container } = render(<Card title="Card Title" className={className} />);
        expect(container.firstChild).toHaveClass(className);
    });
});