// import { Component } from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.scss";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

/* CLASS COMPONENT VERSION */

// class App extends Component {
// 	constructor() {
// 		super();

// 		this.state = {
// 			monsters: [],
// 			searchField: "",
// 			filteredMonsters: [],
// 		};

// 		this.componentDidMount.bind();
// 		this.onSearchChange.bind();
// 	}

// componentDidMount() {
// 	// TASK 1: Fetch the users and set the state
// 	axios.get("https://jsonplaceholder.typicode.com/users")
// 		.then(response => response.data)
// 		.then(users => {
// 			this.setState(() => {
// 				return { monsters: users };
// 			});
// 		});
// }

// 	// Instead of anonymous we use this method.
// onSearchChange = (event) => {
// 	this.setState(() => {
// 		return {
// 			searchField: event.target.value.toLocaleLowerCase(),
// 		};
// 	});
// };

// 	render() {
// 		// Destructuring
// 		const { monsters, searchField } = this.state;
// 		const { onSearchChange } = this;

// const filteredMonsters = monsters.filter((monster) => {
// 	return monster.name.toLocaleLowerCase().includes(searchField);
// });

// 		return (
// 			<div className="App">
// 				<h1 className="app-title">Monsters Rolodex</h1>
// 				<SearchBox
// 					searchField={searchField}
// 					className="monsters-search-box"
// 					placeholder="Search Monsters"
// 					onChangeHandler={onSearchChange}
// 				/>

// 				<CardList monsters={filteredMonsters} />
// 			</div>
// 		);
// 	}
// }

/* FUNCTIONAL COMPONENT VERSION */

const App = () => {
	let [monsters, setMonsters] = useState([]);
	let [filteredMonsters, setFilteredMonsters] = useState(monsters);
	let [searchField, setSearchField] = useState("");

	useEffect(() => {
		// TASK 1: Fetch the users and set the state
		axios
			.get("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.data)
			.then((users) => setMonsters(users));
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			return monster.name.toLocaleLowerCase().includes(searchField);
		});

		setFilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	const onSearchChange = (event) => {
		setSearchField(event.target.value.toLocaleLowerCase());
	};

	return (
		<div className="App">
			<h1 className="app-title">Monsters Rolodex</h1>
			<SearchBox
				searchField={searchField}
				className="monsters-search-box"
				placeholder="Search Monsters"
				value={searchField}
				onChangeHandler={onSearchChange}
			/>

			<CardList monsters={filteredMonsters} />
		</div>
	);
};

export default App;
