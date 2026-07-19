import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import Product from "@/pages/Product";
import About from "@/pages/About";
import Journal from "@/pages/Journal";
import Help from "@/pages/Help";
import { CartProvider } from "@/context/CartContext";
import { products } from "@/data/products";
import "./App.css";

// Tiny wrapper that resolves the route param to a product and forwards
// remaining props. Keeps App.jsx tidy.
function ProductRoute() {
  const { slug } = useParams();
  const product = products.find((p) => p.id === slug) || products[0];
  return <Product product={product} />;
}

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:slug" element={<ProductRoute />} />
            <Route path="/about" element={<About />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/help/:topic" element={<Help />} />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
