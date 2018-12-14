import React, { Component } from "react";
import axios from "axios";
import ReactFileReader from "react-file-reader";
import { Link } from "react-router-dom";
import "./Sign_up.css";

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

	onSubmitSignup = event => {
		axios
			.post("http://localhost:3000/sign_up_company", {
				email: this.state.email,
				password: this.state.password,
				companyName: this.state.companyName,
				companyLogo: this.state.companyLogo
			})
			.then(response => {
				if (response.data && response.data.token) {
					console.log(response.data);
					this.props.logIn({
						token: response.data.token,
						companyName: response.data.companyAccount.companyName,
						_id: response.data._id
					});
					this.props.history.push("/profile");
				}
			})
			.catch(err => {
				console.log(err);
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
			<div className="container">
				<h2>Créer un compte</h2>
				<div className="main-block">
					<div className="simple-input">
						<p>Renseigner votre email :</p>
						<input
							type="email"
							name="email"
							placeholder="exemple: prénom.nom@gmail.com"
							value={this.state.email}
							onChange={this.handleChange}
						/>
					</div>
					<div className="simple-input">
						<p>Entrer votre mot de passe :</p>
						<input
							type="password"
							name="password"
							placeholder="password"
							value={this.state.password}
							onChange={this.handleChange}
						/>
					</div>
					<div className="simple-input">
						<p>Entrer le nom de votre entreprise :</p>
						<input
							name="companyName"
							placeholder="Le nom de votre entreprise"
							value={this.state.companyName}
							onChange={this.handleChange}
						/>
					</div>
					<div className="simple-input">
						<p>Choisir votre logo :</p>
						<ReactFileReader
							fileTypes={[".png", ".jpg"]}
							base64={true}
							multipleFiles={true} // `false si une seule image`
							handleFiles={this.handleFiles}
						>
							<button type="button">+</button>
						</ReactFileReader>
					</div>
					<div>{filesArray}</div>
					<div className="validate">
						<button className="sign-up" onClick={this.onSubmitSignup}>
							Valider
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default Log_in;
