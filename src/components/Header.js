import React, { Component, Fragment } from "react";
import { withRouter, Link } from "react-router-dom";
import "./Header.css";

class Header extends Component {
	onLogOut = event => {
		this.props.logOut();
		this.props.history.push("/");
	};

	renderNav() {
		if (this.props.company._id) {
			return (
				<Fragment>
					<li
						onClick={() =>
							this.props.history.push("/" + this.props.company._id)
						}
					>
						{this.props.company.companyName}
					</li>
					<li onClick={this.onLogOut}>Déconnexion</li>
				</Fragment>
			);
		}
		return (
			<Fragment>
				<li onClick={() => this.props.history.push("/sign_up")}>
					Créer un compte
				</li>
				<li onClick={() => this.props.history.push("/log_in")}>Se connecter</li>
			</Fragment>
		);
	}

	render() {
		return (
			<header>
				<div className="container">
					<div className="Logo">
						<Link to="/">
							<img className="logo-test-it" src="assets/img/Logo.svg" />
						</Link>
					</div>
					<div className="menu-right">
						<ul>{this.renderNav()}</ul>
					</div>
				</div>
			</header>
		);
	}
}

export default withRouter(Header);
