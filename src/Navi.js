import React, { Component } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";
import CartSummary from "./CartSummary";

export default class Navi extends React.Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
			isOpen: false,
		};
	}

	toggle() {
		this.setState({
			isOpen: !this.state.isOpen,
		});
	}

	render() {
		return (
			<div>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">Shop</NavbarBrand>
					<NavbarToggler onClick={this.toggle} />
					<Collapse isOpen={this.state.isOpen} navbar>
						<Nav className="mr-auto" navbar>
							<NavItem>
								<NavLink href="/components/">Components</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="https://github.com/Sere27/react-shop">
									GitHub
								</NavLink>
							</NavItem>
							{/* cart ı app den aldık naviye ordan da cart summary gönderdik*/}
							<CartSummary
								removeFromCart={this.removeFromCart}
								cart={this.props.cart}
							/>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}
