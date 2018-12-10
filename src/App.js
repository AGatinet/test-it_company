import React, { Fragment } from "react";
import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import NewOffer from "./components/NewOffer";
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
						path="/NewOffer"
						render={props => (
							<NewOffer {...props} company={company} logIn={this.logIn} />
						)}
					/>
				</Fragment>
			</Router>
		);
	}
}

export default App;
