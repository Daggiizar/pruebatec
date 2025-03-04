import { useEffect, useState } from 'react';
import { getProducts, addToCart } from '../api';

const ProductList = ({ refreshCart }) => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        getProducts().then(setProducts);
    }, []);

    const handleAddToCart = async (product) => {
        await addToCart(product);
        refreshCart();
    };

    return (
        <div>
            <h2>Lista de Productos</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id} style={{ marginBottom: "10px" }}>
                        {product.name} - ${product.price}
                        <button onClick={() => handleAddToCart(product)}
                            style={{
                                marginLeft: "10px",
                                padding: "8px 12px",
                                backgroundColor: "#007bff",
                                color: "white",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                                fontWeight: "bold",
                                transition: "background-color 0.3s",
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = "#0056b3"}
                            onMouseOut={(e) => e.target.style.backgroundColor = "#007bff"}
                            >Agregar al carrito</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;