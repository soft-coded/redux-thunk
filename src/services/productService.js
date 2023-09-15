import axios from "axios";

class ProductService {
	baseUrl = "https://fakestoreapi.com";

	// GET - all products
	getProducts = () => {
		// states - pending, fullfilled, rejected
		return axios.get(this.baseUrl + "/products");
	};

	// GET - product by id
	getProductById = id => {
		// states - pending, fullfilled, rejected
		return axios.get(this.baseUrl + "/products/" + id);
	};

	// POST - Add product
	addProduct = newProduct => {
		// states - pending, fullfilled, rejected
		return axios.post(this.baseUrl + "/products", newProduct);
	};

	// PUT - update product
	updateProduct = product => {
		// states - pending, fullfilled, rejected
		return axios.put(this.baseUrl + "/products/" + product.id, product);
	};

	// DELETE - Delete product by id
	deleteProduct = id => {
		// states - pending, fullfilled, rejected
		return axios.delete(this.baseUrl + "/products/" + id);
	};
}

export default new ProductService();
