import { Routes, Route, BrowserRouter } from "react-router-dom";
import Header from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import CartDrawer from "./components/layout/CartDrawer";
import { CartProvider } from "./contexts/CartContext";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";

export default function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          <Footer />
          <CartDrawer />
        </div>
      </CartProvider>
    </BrowserRouter>
  );
}
