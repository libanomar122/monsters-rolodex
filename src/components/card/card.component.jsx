// import { Component } from "react";
import "./card.styles.scss";

/* CLASS COMPONENT VERSION */

// class Card extends Component {
// 	render() {
// 		const { monster } = this.props;

// return (
// 	<div className="card-container" key={monster.id}>
// 		<img
// 			src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
// 			alt={`monster ${monster.name}`}
// 		/>
// 		<h1>{monster.name}</h1>
// 		<p>{monster.email}</p>
// 	</div>
// );
// 	}
// }

/* FUNCTIONAL COMPONENT VERSION */

const Card = ({ monster: {id, name, email} }) => (
	<div className="card-container" key={id}>
		<img
			src={`https://robohash.org/${id}?set=set2&size=180x180`}
			alt={`monster ${name}`}
		/>
		<h1 data-testid="monster-name">{name}</h1>
		<p>{email}</p>
	</div>
);

export default Card;
