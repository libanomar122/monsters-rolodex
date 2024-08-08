import { render, screen } from "@testing-library/react";
import CardList from "./card-list.component";
import mockMonsters from "../../monsters.json";

jest.mock("../card/card.component", () => {
	return ({ monster }) => <div data-testid="card">{monster.name}</div>;
});

describe("CardList Component", () => {
	test("renders correct number of Card components", () => {
		render(<CardList monsters={mockMonsters} />);

		const cardElements = screen.getAllByTestId("card");
		expect(cardElements).toHaveLength(mockMonsters.length);
	});

	test("renders correct monster names in Card components", () => {
		render(<CardList monsters={mockMonsters} />);

		mockMonsters.forEach((monster) => {
			expect(screen.getByText(monster.name)).toBeInTheDocument();
		});
	});
});
