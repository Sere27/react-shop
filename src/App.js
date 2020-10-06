import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import alertify from "alertifyjs";
import { Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";
import FormDemo2 from "./FormDemo2";

export default class App extends Component {
	state = {
		currentCategory: "",
		products: [],
		cart: [],
	};

	componentDidMount() {
		this.getProducts();
	}

	changeCategory = (category) => {
		this.setState({ currentCategory: category.categoryName });
		this.getProducts(category.id);
	};

	getProducts = (categoryId) => {
		//categoryId categories leri belirtiyor

		let url = "http://localhost:3000/products";
		if (categoryId) {
			url += "?categoryId=" + categoryId;
		}
		fetch(url)
			.then((response) => response.json())
			.then((data) => this.setState({ products: data }));
	};

	addToCart = (product) => {
		let newCart = this.state.cart;
		//daha önce eklendi mi diye bakıyoruz
		var addedItem = newCart.find((c) => c.product.id === product.id);
		if (addedItem) {
			addedItem.quantity += 1;
		} else {
			newCart.push({ product: product, quantity: 1 });
		}
		this.setState({ cart: newCart });

		alertify.success(product.productName + " added to cart", 2);
	};

	removeFromCart = (product) => {
		//benim gönderdiğim id dışındakileri filtrele
		let newCart = this.state.cart.filter((c) => c.product.id !== product.id);
		this.setState({ cart: newCart });

		alertify.error(product.productName + " product removed from cart", 2);
	};

	render() {
		let categoryInfo = { title: "Category List" };
		let productInfo = { title: "Product List" };

		return (
			<div>
				<Container>
					<Navi removeFromCart={this.removeFromCart} cart={this.state.cart} />
					<Row>
						<Col xs="4">
							<CategoryList
								info={categoryInfo}
								currentCategory={this.state.currentCategory}
								changeCategory={this.changeCategory}
							></CategoryList>
						</Col>
						<Col xs="8">
							<Switch>
								<Route
									exact
									path="/"
									render={(props) => (
										<ProductList
											products={this.state.products}
											addToCart={this.addToCart}
											info={productInfo}
											currentCategory={this.state.currentCategory}
										></ProductList>
									)}
								></Route>
								<Route
									exact
									path="/cart"
									render={(props) => (
										<CartList
											cart={this.state.cart}
											removeFromCart={this.removeFromCart}
										></CartList>
									)}
								></Route>
								<Route path="/form1" component={FormDemo1}></Route>
								<Route path="/form2" component={FormDemo2}></Route>
								<Route component={NotFound}></Route>
							</Switch>
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}
//div altına h3 ekleyemeyiz aynı hiyerarşide 2 ana
//yapı oluşturdun diyor ana bir tag olması zorunlu
//hepsini 1 div içine örneğin.

//Props bir componentden bir diğerine taşınan data.
//State ise bir componentin kendi özel datasıdır.

//React ile çalışıyorsak arrow functions kullanıyoruz
//Yada bind etmemiz lazım
