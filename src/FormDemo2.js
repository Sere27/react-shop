import React, { Component } from "react";
import alertify from "alertifyjs";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

export default class FormDemo2 extends Component {
	state = { email: "", password: "", city: "", description: "" };

	handleChange = (e) => {
		let name = e.target.name;
		let value = e.target.value;
		this.setState({ [name]: value });
	};

	handleSubmit = (e) => {
		e.preventDefault();
		alertify.success(this.state.email + " added to db", 2);
		alertify.success(this.state.password + " added to db", 2);
		alertify.success(this.state.city + " added to db", 2);
		alertify.success(this.state.description + " added to db", 2);
	};

	render() {
		return (
			<div>
				<Form className="text-success mt-4" onSubmit={this.handleSubmit}>
					<FormGroup>
						<Label for="email">E-Mail </Label>
						<Input
							type="email"
							name="email"
							id="email"
							placeholder="enter e-mail"
							onChange={this.handleChange}
						></Input>
					</FormGroup>
					<FormGroup>
						<Label for="password">Password </Label>
						<Input
							type="password"
							name="password"
							id="password"
							placeholder="enter password"
							onChange={this.handleChange}
						></Input>
					</FormGroup>
					<FormGroup>
						<Label for="description">Description </Label>
						<Input
							type="textarea"
							name="description"
							id="description"
							placeholder="enter description"
							onChange={this.handleChange}
						></Input>
					</FormGroup>
					<FormGroup>
						<Label for="city">City</Label>
						<Input
							type="select"
							name="city"
							id="city"
							onChange={this.handleChange}
						>
							<option>Ankara</option>
							<option>İstanbul</option>
							<option>İzmir</option>
							<option>Adana</option>
							<option>Gaziantep</option>
							<option>Diyarbakır</option>
							<option>Hatay</option>
						</Input>
					</FormGroup>
					<Button color="success" type="submit">
						Save
					</Button>
				</Form>
			</div>
		);
	}
}
