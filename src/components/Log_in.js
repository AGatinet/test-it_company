import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Log_in extends Component {
	state = {
		email: "",
		password: "",
		companyName: "",
		companyPhone: "",
		companyLogo: [],
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
	handleFiles = files => {
		const newFiles = [...this.state.companyLogo, ...files.base64];
		this.setState({
			companyLogo: newFiles
		});
	};
	onSubmitLogin = event => {
		axios
			.post("http://localhost:3000/log_in_company", {
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
					this.props.history.push("/profile");
				}
			})
			.catch(function(error) {
				console.log(error);
			});
	};

	render() {
		const filesArray = [];
		for (let i = 0; i < this.state.companyLogo.length; i++) {
			filesArray.push(
				<img
					key={i}
					onClick={() => {
						// En cliquant sur l'image, le fichier sera supprimé
						const newFiles = [...this.state.companyLogo];
						newFiles.splice(i, 1);
						this.setState({ companyLogo: newFiles });
					}}
					src={this.state.companyLogo[i]}
					alt="Annonce"
				/>
			);
		}
		return (
			<div>
				<div className="container">
					<h2>Se connecter</h2>
					<div className="main-block">
						<div className="simple-input">
							<p>Veuillez entrer votre email de connexion :</p>
							<input
								type="email"
								name="email"
								placeholder="exemple@gmail.com"
								value={this.state.email}
								onChange={this.handleChange}
							/>
						</div>
						<p>Veuillez entrer votre mot de passe de connexion :</p>
						<div className="simple-input">
							<input
								type="password"
								name="password"
								placeholder="password"
								value={this.state.password}
								onChange={this.handleChange}
							/>
						</div>
						<div className="validate">
							<button className="log-in" onClick={this.onSubmitLogin}>
								Se connecter
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Log_in;
