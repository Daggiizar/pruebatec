import { useEffect, useState } from "react";
import { getCart } from "../api";

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        getCart().then(setCart);
    }, []);

    return (
        <div>
            <h2>Carrito de Compras</h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index}>
                        {item.name} - ${item.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;