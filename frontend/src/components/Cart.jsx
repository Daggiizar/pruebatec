import { useEffect, useState } from "react";
import { getCart } from "../api";
import { findBestCombination } from "../utils";

const Cart = () => {
    const [cart, setCart] = useState([]);
    const [budget, setBudget] = useState("");
    const [bestCombo, setBestCombo] = useState([]);

    useEffect(() => {
        getCart().then(setCart);
    }, []);

    const handleFindBestCombo = () => {
        const budgetValue = parseFloat(budget);
        if (isNaN(budgetValue) || budgetValue <= 0) {
            alert("Ingrese un presupuesto válido");
            return;
        }
        const best = findBestCombination(cart, budgetValue);
        setBestCombo(best);
    };

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

            {/* Sección para ingresar presupuesto */}
            <h3>Buscar mejor Combinación</h3>
            <input
                type="number"
                placeholder="Ingrese su Presupuesto"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
            />
            <button onClick={handleFindBestCombo}
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
            >
                Buscar
            </button>

            {/* Mostrar la mejor combinación encontrada */}
            {bestCombo.length > 0 && (
                <div>
                    <h3>Mejor combinación dentro del presupuesto</h3>
                    <ul>
                        {bestCombo.map((product, index) => (
                            <li key={index}>
                                {product.name} - ${product.price}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Cart;