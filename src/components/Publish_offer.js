import React, { Component } from "react";
import axios from "axios";
import "./Publish_offer.css";

class NewOffer extends Component {
	state = {
		offerName: "offre1",
		creationDate: "",
		deadlineInscription: "2019/02/03",
		deadlineTest: "2019/02/03",
		duration: "1h",
		picture: "",
		streeNumber: "",
		streeName: "",
		city: "",
		country: "",
		description:
			"Quibus occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens scuta qui habitus iram pugnantium concitat et dolorem proximos iam gestu terrebat sed eum in certamen alacriter consurgentem revocavere ductores rati intempestivum anceps subire certamen cum haut longe muri distarent, quorum tutela securitas poterat in solido locari cunctorum.",
		wantedProfiles:
			"Quibus occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens scuta qui habitus iram pugnantium concitat et dolorem proximos iam gestu terrebat sed eum in certamen alacriter consurgentem revocavere ductores rati intempestivum anceps subire certamen cum haut longe muri distarent, quorum tutela securitas poterat in solido locari cunctorum.",
		conditions:
			"Quibus occurrere bene pertinax miles explicatis ordinibus parans hastisque feriens scuta qui habitus iram pugnantium concitat et dolorem proximos iam gestu terrebat sed eum in certamen alacriter consurgentem revocavere ductores rati intempestivum anceps subire certamen cum haut longe muri distarent, quorum tutela securitas poterat in solido locari cunctorum.",
		availabilities: "50",
		price: "15",
		typeOffer: "",
		ageMin: "",
		ageMax: "",
		genderTarget: ""
	};

	handleChange = event => {
		const target = event.target;
		const name = target.name;
		// Utile si le formulaire contient des éléments "checkbox"
		const value = target.type === "checkbox" ? target.checked : target.value;
		this.setState({ [name]: value });
	};
	onSubmitCreateOffer = event => {
		axios
			.post(
				"http://192.168.86.60:3000/publish",
				{ ...this.state, company: this.props.company._id },
				{
					headers: { authorization: "Bearer " + this.props.company.token }
				}
			)
			.then(response => {
				// console.log("yes man");
				// console.log(response);
				alert("Votre offre a bien été enregistré");
				this.props.history.push("/profile");
			})
			.catch(err => {
				console.log(err);
			});
	};
	render() {
		// console.log(this.props.company._id);
		return (
			<div className="container">
				<h2>Créer une offre</h2>
				<div className="form">
					<div className="offerTitle">
						<p>Nom de l'offre</p>
						<input
							name="offerName"
							placeholder="offerName"
							value={this.state.offerName}
							onChange={this.handleChange}
							required
						/>
					</div>
					<div className="detailsOffer">
						<div className="offerDescription">
							<p>Description</p>
							<input
								name="description"
								placeholder="description"
								value={this.state.description}
								onChange={this.handleChange}
								required
							/>
						</div>
						<div className="wantedProfiles">
							<p>Profiles recherchés</p>
							<input
								name="wantedProfiles"
								placeholder="wantedProfiles"
								value={this.state.wantedProfiles}
								onChange={this.handleChange}
								required
							/>
						</div>
						<div className="conditions">
							<p>Conditions requises</p>
							<input
								name="conditions"
								placeholder="conditions"
								value={this.state.conditions}
								onChange={this.handleChange}
								required
							/>
						</div>
					</div>
					<div className="offerDates">
						<div className="detailsOfferDates">
							<p>Date limite d'inscription</p>
							<input
								name="deadlineInscription"
								type="date"
								placeholder="deadlineInscription"
								value={this.state.deadlineInscription}
								onChange={this.handleChange}
								required
							/>
						</div>
						<div className="detailsOfferDates">
							<p>Date du test</p>
							<input
								name="deadlineTest"
								type="date"
								placeholder="deadlineTest"
								value={this.state.deadlineTest}
								onChange={this.handleChange}
								required
							/>
						</div>
					</div>
					<p>Durée du test</p>
					<input
						name="duration"
						placeholder="duration"
						value={this.state.duration}
						onChange={this.handleChange}
						required
					/>
					<p>Adresse :</p>
					<div className="adressInfo">
						<div className="detailsAdressInfo">
							<p>Numéro de rue</p>
							<input
								name="streetNumber"
								placeholder="streetNumber"
								value={this.state.streetNumber}
								onChange={this.handleChange}
								required
							/>
						</div>
						<div className="detailsAdressInfo">
							<p>Nom de la rue</p>
							<input
								name="streetName"
								placeholder="streetName"
								value={this.state.streetName}
								onChange={this.handleChange}
								required
							/>
						</div>
						<div className="detailsAdressInfo">
							<p>Ville</p>
							<input
								name="city"
								placeholder="city"
								value={this.state.city}
								onChange={this.handleChange}
								required
							/>
						</div>
						<div className="detailsAdressInfo">
							<p>Pays</p>
							<input
								name="country"
								placeholder="country"
								value={this.state.country}
								onChange={this.handleChange}
								required
							/>
						</div>
					</div>
					<p>Nombre de places pour le test (participants maximum)</p>
					<input
						name="availabilities"
						type="number"
						placeholder="availabilities"
						value={this.state.availabilities}
						onChange={this.handleChange}
						required
					/>
					<p>Rémunération (en euros)</p>
					<input
						name="price"
						type="number"
						placeholder="price"
						value={this.state.price}
						onChange={this.handleChange}
						required
					/>
					<div className="testTypes">
						<p>Type de test :</p>
						{/* <input
						name="typeOffer"
						placeholder="typeOffer"
						value={this.state.typeOffer}
						onChange={this.handleChange}
						required
						list="browserTypeOffers"
					/> */}
						{/* <select
						name="typeOffer"
						value={this.state.typeOffer}
						onChange={this.handleChange}
						required
					>
						<option value="Physique">Physique</option>
						<option value="Online">Online</option>
					</select> */}

						<input
							type="radio"
							name="typeOffer"
							value="Physique"
							onClick={this.handleChange}
						/>
						<p>Physique</p>
						<input
							type="radio"
							name="typeOffer"
							value="Online"
							onClick={this.handleChange}
						/>
						<p>Online</p>
					</div>
					<div className="ageFilters">
						<div className="detailsAgeFilters">
							<p>Age minimum requis</p>
							<input
								name="ageMin"
								placeholder="ageMin"
								value={this.state.ageMin}
								onChange={this.handleChange}
							/>
						</div>
						<div className="detailsAgeFilters">
							<p>Age maximum requis</p>
							<input
								name="ageMax"
								placeholder="ageMax"
								value={this.state.ageMax}
								onChange={this.handleChange}
							/>
						</div>
					</div>
					<div className="genderTarget">
						<p>Le test s'adresse aux :</p>
						<input
							type="radio"
							name="genderTarget"
							value="homme"
							onChange={this.handleChange}
						/>
						<p>hommes</p>
						<input
							type="radio"
							name="genderTarget"
							value="femme"
							onChange={this.handleChange}
						/>
						<p>femmes</p>
						<input
							type="radio"
							name="genderTarget"
							value=""
							onChange={this.handleChange}
						/>
						<p>aux hommes et aux femmes</p>
					</div>
					<div className="submit">
						<button onClick={this.onSubmitCreateOffer}>Valider</button>
					</div>
				</div>
			</div>
		);
	}
}

export default NewOffer;
