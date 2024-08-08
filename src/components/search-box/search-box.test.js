import { render, screen, fireEvent } from "@testing-library/react";
import SearchBox from "./search-box.component";

describe("SearchBox Component", () => {
	const placeholderText = "Search Monsters";
	const className = "monsters-search-box";
	const searchField = "";
	const onChangeHandler = jest.fn();

	test("renders SearchBox with correct props", () => {
		render(
			<SearchBox
				placeholder={placeholderText}
				className={className}
				searchField={searchField}
				onChangeHandler={onChangeHandler}
			/>
		);

		const inputElement = screen.getByPlaceholderText(placeholderText);
		expect(inputElement).toBeInTheDocument();
		expect(inputElement).toHaveClass(`search-box ${className}`);
		expect(inputElement).toHaveValue(searchField);
	});

	test("calls onChangeHandler on input change", () => {
		render(
			<SearchBox
				placeholder={placeholderText}
				className={className}
				searchField={searchField}
				onChangeHandler={onChangeHandler}
			/>
		);

		const inputElement = screen.getByPlaceholderText(placeholderText);
		fireEvent.change(inputElement, { target: { value: "Dracula" } });
		expect(onChangeHandler).toHaveBeenCalledTimes(1);
		expect(onChangeHandler).toHaveBeenCalledWith(expect.any(Object));
	});
});
