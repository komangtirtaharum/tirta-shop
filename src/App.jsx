
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/frontpages/Dashboard";
import ProductDetail from "./pages/frontpages/ProductDetail";
import Cart from "./pages/frontpages/Cart";
import Checkout from "./pages/frontpages/Checkout";
import MyOrders from "./pages/frontpages/MyOrders";
import Admin from "./pages/frontpages/Admin";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((currentCart) => [...currentCart, product]);
  };

  const removeFromCart = (index) => {
    setCart((currentCart) =>
      currentCart.filter((_, i) => i !== index)
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <BrowserRouter>
      <MainLayout cartCount={cart.length}>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route
            path="/product/:id"
            element={<ProductDetail onAddToCart={addToCart} />}
          />

          <Route
            path="/cart"
            element={
              <Cart cart={cart} onRemove={removeFromCart} />
            }
          />

          <Route
            path="/checkout"
            element={
              <Checkout
                cart={cart}
                onClearCart={clearCart}
              />
            }
          />

          <Route path="/my-orders" element={<MyOrders />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;