import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";

export default class App extends Component {
	state = {
		currentCategory: "",
		products: [],
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

	addToCard = (product) => {
		alert(product.productName);
	};

	render() {
		let categoryInfo = { title: "Category List" };
		let productInfo = { title: "Product List" };

		return (
			<div>
				<Container>
					<Navi />
					<Row>
						<Col xs="4">
							<CategoryList
								info={categoryInfo}
								currentCategory={this.state.currentCategory}
								changeCategory={this.changeCategory}
							></CategoryList>
						</Col>
						<Col xs="8">
							<ProductList
								products={this.state.products}
								info={productInfo}
								currentCategory={this.state.currentCategory}
							></ProductList>
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
