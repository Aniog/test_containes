import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";

function AppLayout() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <Navbar onCartOpen={() => setCartOpen(true)} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/collections" element={<ShopPage />} />
        <Route
          path="*"
          element={
            <main className="flex min-h-screen items-center justify-center pt-24">
              <div className="text-center">
                <h1 className="font-serif text-3xl font-light">Page Not Found</h1>
                <p className="mt-2 font-sans text-sm text-foreground/50">
                  The page you&apos;re looking for doesn&apos;t exist.
                </p>
              </div>
            </main>
          }
        />
      </Routes>
      <Footer />
      <CartDrawer open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppLayout />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
