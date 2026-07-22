import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { CartProvider } from "@/context/CartContext.jsx";
import Navbar from "@/components/Navbar.jsx";
import Footer from "@/components/Footer.jsx";
import CartDrawer from "@/components/cart/CartDrawer.jsx";
import Home from "@/pages/Home.jsx";
import Shop from "@/pages/Shop.jsx";
import ProductDetail from "@/pages/ProductDetail.jsx";
import About from "@/pages/About.jsx";
import Journal from "@/pages/Journal.jsx";
import Collections from "@/pages/Collections.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="flex min-h-screen flex-col bg-ivory font-sans text-ink">
          <Navbar />
          <CartDrawer />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/about" element={<About />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
