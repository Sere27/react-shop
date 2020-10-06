import React, { Component } from "react";

export default class FormDemo1 extends Component {
	state = { userName: "", city: "" };

	onChangeHandler = (e) => {
		//this.setState({ userName: e.target.value });
		let name = e.target.name;
		let value = e.target.value;
		this.setState({
			[name]: value,
		});
	};

	onSubmitHandler = (e) => {
		alert(this.state.userName + this.state.city);

		e.preventDefault();
	};

	render() {
		return (
			<div>
				<form onSubmit={this.onSubmitHandler}>
					<h4 className="text-primary mt-2">User Name</h4>
					<input
						name="userName"
						onChange={this.onChangeHandler}
						type="text"
					></input>
					<h5 className="text-muted">User name is {this.state.userName}</h5>

					<h4 className="text-primary mt-2">City</h4>
					<input
						name="city"
						onChange={this.onChangeHandler}
						type="text"
					></input>
					<h5 className="text-muted">City is {this.state.city}</h5>

					<input type="submit" value="Save"></input>
				</form>
			</div>
		);
	}
}
