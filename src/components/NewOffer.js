import React, { Component } from "react";
import axios from "axios";

class NewOffer extends Component {
	state = {
		offerName: "",
		creationDate: "",
		deadlineInscription: "",
		deadlineTest: "",
		duration: "",
		picture: "",
		country: "",
		city: "",
		availabilities: "",
		price: "",
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
				"http://localhost:3001/publish",
				{ ...this.state, company: this.props.company._id },
				{
					headers: { authorization: "Bearer " + this.props.company.token }
				}
			)
			.then(response => {
				console.log("yes man");
				console.log(response);
			})
			.catch(err => {
				console.log(err);
			});
	};
	render() {
		return (
			<div>
				<h2>Creer une offre</h2>
				<div>
					<input
						name="offerName"
						placeholder="offerName"
						value={this.state.offerName}
						onChange={this.handleChange}
						required
					/>
					<input
						name="deadlineInscription"
						type="date"
						placeholder="deadlineInscription"
						value={this.state.deadlineInscription}
						onChange={this.handleChange}
						required
					/>
					<input
						name="deadlineTest"
						type="date"
						placeholder="deadlineTest"
						value={this.state.deadlineTest}
						onChange={this.handleChange}
						required
					/>
					<input
						name="duration"
						placeholder="duration"
						value={this.state.duration}
						onChange={this.handleChange}
						required
					/>
					<input
						name="country"
						placeholder="country"
						value={this.state.country}
						onChange={this.handleChange}
						required
					/>
					<input
						name="city"
						placeholder="city"
						value={this.state.city}
						onChange={this.handleChange}
						required
					/>
					<input
						name="availabilities"
						type="number"
						placeholder="availabilities"
						value={this.state.availabilities}
						onChange={this.handleChange}
						required
					/>
					<input
						name="price"
						type="number"
						placeholder="price"
						value={this.state.price}
						onChange={this.handleChange}
						required
					/>
					<input
						name="typeOffer"
						placeholder="typeOffer"
						value={this.state.typeOffer}
						onChange={this.handleChange}
						required
					/>
					<input
						name="ageMin"
						placeholder="ageMin"
						value={this.state.ageMin}
						onChange={this.handleChange}
					/>
					<input
						name="ageMax"
						placeholder="ageMax"
						value={this.state.ageMax}
						onChange={this.handleChange}
					/>
					<input
						name="genderTarget"
						placeholder="genderTarget"
						value={this.state.genderTarget}
						onChange={this.handleChange}
					/>
					<button onClick={this.onSubmitCreateOffer}>valider</button>
				</div>
			</div>
		);
	}
}

export default NewOffer;
