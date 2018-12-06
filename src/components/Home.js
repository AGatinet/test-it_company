import React, { Component } from "react";
import axios from "axios";

class Home extends Component {
	state = {
		email: "",
		password: "",
		companyName: "",
		companyPhone: "",
		companyLogo: "",
		companyIndustry: "",
		companyAdress: {
			country: "",
			city: "",
			street: ""
		}
	};
	handleChange = event => {
		const target = event.target;
		const name = target.name;
		// Utile si le formulaire contient des éléments "checkbox"
		const value = target.type === "checkbox" ? target.checked : target.value;
		this.setState({ [name]: value });
	};
	onSubmitLogin = event => {
		axios
			.post("http://localhost:3001/log_in_company", {
				email: this.state.email,
				password: this.state.password
			})
			.then(response => {
				if (response.data && response.data.token) {
					// console.log(response);
					this.props.logIn({
						token: response.data.token,
						companyName: response.data.companyAccount.companyName,
						_id: response.data._id
					});
					this.props.history.push("/NewOffer");
				}
			})
			.catch(function(error) {
				console.log(error);
			});
	};
	onSubmitSignup = event => {
		axios
			.post("http://localhost:3001/sign_up_company", {
				email: this.state.email,
				password: this.state.password,
				companyName: this.state.companyName
			})
			.then(response => {
				if (response.data && response.data.token) {
					console.log(response.data);
					this.props.logIn({
						token: response.data.token,
						companyName: response.data.companyAccount.companyName,
						_id: response.data._id
					});
					this.props.history.push("/NewOffer");
				}
			})
			.catch(err => {
				console.log(err);
			});
	};
	render() {
		return (
			<div>
				<h2>Se connecter</h2>
				<div>
					<input
						name="email"
						placeholder="email"
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<input
						name="password"
						placeholder="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<button onClick={this.onSubmitLogin}>Se connecter</button>
				</div>
				<h2>Creer un compte</h2>
				<div>
					<input
						name="email"
						placeholder="email"
						value={this.state.email}
						onChange={this.handleChange}
					/>
					<input
						name="password"
						placeholder="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
					<input
						name="companyName"
						placeholder="companyName"
						value={this.state.companyName}
						onChange={this.handleChange}
					/>
					<button onClick={this.onSubmitSignup}>Valider</button>
				</div>
			</div>
		);
	}
}

export default Home;
