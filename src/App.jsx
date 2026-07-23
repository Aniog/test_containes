// Velmora Fine Jewelry — main app
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Nav from "@/components/nav/Nav";
import CartDrawer from "@/components/cart/CartDrawer";
import Footer from "@/components/common/Footer";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import "./App.css";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <CartDrawer />
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductDetail />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Layout>
      </CartProvider>
    </Router>
  );
}

export default App;
