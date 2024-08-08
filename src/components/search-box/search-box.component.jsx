// import { Component } from "react";
import "./search-box.styles.scss";

/* CLASS COMPONENT VERSION */

// class SearchBox extends Component {
// 	render() {
// 		const { onChangeHandler, searchField, className, placeholder } =
// 			this.props;

// 		return (
// 			<input
// 				type="search"
// 				placeholder={placeholder}
// 				className={`search-box ${className}`}
// 				value={searchField}
// 				onChange={onChangeHandler}
// 			/>
// 		);
// 	}
// }

/* FUNCTIONAL COMPONENT VERSION */

const SearchBox = ({
	placeholder,
	className,
	searchField,
	onChangeHandler,
}) => (
	<input
		type="search"
		placeholder={placeholder}
		className={`search-box ${className}`}
		value={searchField}
		onChange={onChangeHandler}
	/>
);

export default SearchBox;
