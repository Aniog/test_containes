import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";

function PlaceholderPage({ title }) {
  return (
    <div className="min-h-screen bg-ivory flex items-center justify-center pt-20">
      <div className="text-center">
        <h1 className="font-cormorant text-5xl font-light text-espresso">{title}</h1>
        <p className="font-inter text-sm text-stone-warm mt-4">Coming soon</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <Router>
        <Nav />
        <CartDrawer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/about" element={<PlaceholderPage title="Our Story" />} />
          <Route path="/journal" element={<PlaceholderPage title="Journal" />} />
          <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;

