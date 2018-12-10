import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

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
				<li onClick={() => this.props.history.push("/")}>Créer un compte</li>
				<li onClick={() => this.props.history.push("/")}>Se connecter</li>
			</Fragment>
		);
	}

	render() {
		return (
			<header>
				<div className="menu-right">
					<ul>{this.renderNav()}</ul>
				</div>
			</header>
		);
	}
}

export default withRouter(Header);
