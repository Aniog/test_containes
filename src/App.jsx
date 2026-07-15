import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Layout from "@/components/Layout";
import Home from "@/pages/Home";
import Collection from "@/pages/Collection";
import ProductDetail from "@/pages/ProductDetail";

function App() {
  return (
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Collection />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  );
}

export default App;
