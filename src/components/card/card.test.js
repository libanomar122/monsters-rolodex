import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "./card.component";
import Card from "./card.component";
import monsters from "../../monsters.json";

test("renders a card component for just 1 monsters", () => {
	// TASK 1: Provide the test data
	const monster = monsters[0];

	// TASK 2: Render the component in a Virtual DOM
	render(<Card monster={monster} />);

	// TASK 3: Check if the image is rendered with the correct src and alt attributes
	const imgElement = screen.getByAltText(`monster ${monster.name}`);
	expect(imgElement).toBeInTheDocument;
	expect(imgElement).toHaveAttribute(
		"src",
		`https://robohash.org/${monster.id}?set=set2&size=180x180`
	);

	// TASK 4: Check if the name is rendered
	const nameElement = screen.getByText(monster.name);
	expect(nameElement).toBeInTheDocument();

	// TASK 5: Check if the email is rendered
	const emailElement = screen.getByText(monster.email);
	expect(emailElement).toBeInTheDocument();
});
