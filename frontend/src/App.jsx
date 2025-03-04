import { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  const [refresh, setRefresh] = useState(false);

  const refreshCart = () => setRefresh(!refresh);

  return (
    <div>
      <h1>Carrito de Compras</h1>
      <ProductList refreshCart={refreshCart} />
      <Cart key={refresh} />
    </div>
  );
}

export default App;
