import React, { Component } from "react";

class Offer extends Component {
	state = {
		annonce: {}
	};
	render() {
		return <div>HELLO WORLD</div>;
	}
	componentDidMount() {
		axios
			.get(
				`https://localhost:3000/offer/${this.props.match.params.id}` // string template
			)
			.then(response => {
				console.log;
				this.setState({
					annonce: response.data
				});
			});
	}
}

export default Offer;
