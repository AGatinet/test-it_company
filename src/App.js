import React, { Fragment } from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import PublishOffer from "./components/Publish_offer";
import LogIn from "./components/Log_in";
import SignUp from "./components/Sign_up";
import Profile from "./components/Profile";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Cookies from "js-cookie";

class App extends React.Component {
	state = {
		company: {
			token: Cookies.get("token") || "",
			companyName: Cookies.get("companyName") || "",
			_id: Cookies.get("_id") || ""
		}
	};
	logIn = company => {
		Cookies.set("token", company.token);
		Cookies.set("companyName", company.companyName);
		Cookies.set("_id", company._id);

		this.setState({ company: company });
	};

	logOut = () => {
		Cookies.remove("token");
		Cookies.remove("companyName");
		Cookies.remove("_id");

		this.setState({
			company: {
				token: "",
				companyName: "",
				_id: ""
			}
		});
	};
	render() {
		const { company } = this.state;
		return (
			<Router>
				<Fragment>
					<Header company={company} logOut={this.logOut} />
					<Route
						exact
						path="/"
						render={props => (
							<Home {...props} company={company} logIn={this.logIn} />
						)}
					/>
					<Route
						path="/log_in"
						render={props => (
							<LogIn {...props} company={company} logIn={this.logIn} />
						)}
					/>
					<Route
						path="/sign_up"
						render={props => (
							<SignUp {...props} company={company} logIn={this.logIn} />
						)}
					/>
					<Route
						path="/publish_offer"
						render={props => (
							<PublishOffer {...props} company={company} logIn={this.logIn} />
						)}
					/>
					<Route
						path="/profile"
						render={props => (
							<Profile {...props} company={company} logIn={this.logIn} />
						)}
					/>
				</Fragment>
			</Router>
		);
	}
}

export default App;
