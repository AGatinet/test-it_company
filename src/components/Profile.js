import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import axios from "axios";
import OfferCard from "../components/OfferCard";

class Profile extends Component {
	state = {
		offers: [],
		id: this.props.company._id
	};

	getOffers = () => {
		console.log(this.state.id);
		axios
			.get("http://localhost:3000/get_offer_company", {
				params: { id: this.state.id }
			})
			.then(response => {
				console.log(response.data);
				this.setState({ offers: response.data });
			});
	};

	renderOffers = () => {
		const offerCardElements = this.state.offers.map(offer => (
			<OfferCard key={offer._id} offer={offer} />
		));

		return offerCardElements;
	};
	render() {
		return (
			<div className="container">
				<h2>Mon profile</h2>
				<div className="main-block">
					<div className="my-offers">
						<div className="my-offers-left">
							<h3>Mes offres publiées</h3>
						</div>
						<div className="my-offers-right">
							<h3>Créer une nouvelle offre</h3>
							<Link className="button-left" to="/publish_offer">
								<button>+</button>
							</Link>
						</div>
					</div>
					<div>{this.renderOffers()}</div>
				</div>
			</div>
		);
	}
	componentDidMount() {
		this.getOffers();
		console.log(this.state);
	}
}

export default Profile;
