import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CartDrawer from "./components/layout/CartDrawer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";

function App() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-velmora-bg text-velmora-text">
          <Navbar onCartOpen={() => setCartOpen(true)} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/products/:id" element={<ProductDetail />} />
            <Route
              path="*"
              element={
                <main className="py-20 text-center">
                  <h1 className="font-serif text-3xl text-velmora-text">Page Not Found</h1>
                  <p className="text-velmora-muted mt-2">The page you're looking for doesn't exist.</p>
                </main>
              }
            />
          </Routes>
          <Footer />
          <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
