import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

class Profile extends Component {
	render() {
		return (
			<div className="container">
				<h2>Mon profile</h2>
				<div className="main-block">
					<div className="my-offers">
						<h3>Mes offres publiées</h3>
						<Link to="/publish_offer">
							<button>Créer une nouvelle offre</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Profile;
