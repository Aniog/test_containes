import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { CartProvider } from "./context/CartContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CartDrawer from "./components/CartDrawer";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <CartDrawer />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/collections" element={<Shop />} />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center pt-20">
                <div className="text-center">
                  <h1
                    className="text-display-md text-charcoal-800 mb-4"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    Page Coming Soon
                  </h1>
                  <p className="text-body-md text-charcoal-500">
                    This page is under construction.
                  </p>
                </div>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App
