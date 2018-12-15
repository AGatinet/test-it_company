import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./OfferCard.css";

class OfferCard extends Component {
	state = {
		bookedPlaces: this.props.offer.listTesters.length,
		totalPlaces:
			this.props.offer.availabilities + this.props.offer.listTesters.length
	};

	formattedDate(d = new Date(this.props.offer.deadlineTest)) {
		let month = String(d.getMonth() + 1);
		let day = String(d.getDate());
		const year = String(d.getFullYear());

		if (month.length < 2) month = "0" + month;
		if (day.length < 2) day = "0" + day;

		return `${day}/${month}/${year}`;
	}

	renderPicture = () => {
		// if (this.props.offer.pictures.length > 0) {
		// 	return (
		// 		<img
		// 			src={this.props.offer.pictures[0].secure_url}
		// 			alt="preview"
		// 			className="offer-img"
		// 		/>
		// 	);
		// }
		return <div className="offer-img" />;
	};
	render() {
		// console.log("tot", this.props.offer.listTesters.length);
		// console.log(this.props.offer);
		return (
			<Link className="offer-card" to={`/offer/${this.props.offer._id}`}>
				{/* Partie gauche (image) */}
				{this.renderPicture()}
				{/* Partie droite (Titre et prix) */}
				<div className="offer-body">
					<div className="offer-body-left">
						<h4 className="offer-title">{this.props.offer.offerName}</h4>
						<p>Type de test : </p>
						{this.props.offer.typeOffer}
					</div>
					<div className="offer-body-right">
						<div className="offer-deadlineTest">
							<p>Date du test : </p>
							{this.formattedDate()}
						</div>
						<div className="offer-availabilities">
							<p>Nombre de participants : </p>
							{this.state.bookedPlaces} / {this.state.totalPlaces}
						</div>
					</div>
				</div>
			</Link>
		);
	}
}

export default OfferCard;
