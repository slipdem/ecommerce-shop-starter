import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ chidren }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch('https://fakestoreapi.com/products');
			const data = await response.json();
			setProducts(data);
		};
		fetchProducts();
	}, []);

	return (
		<ProductContext.Provider value={{ products }}>
			{chidren}
		</ProductContext.Provider>
	);
};

export default ProductProvider;
