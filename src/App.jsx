import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Layout from "./Layout";
import Home from "@/pages/Home";
import Collection from "@/pages/Collection";
import Product from "@/pages/Product";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Collection />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="*" element={<Collection />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </CartProvider>
  );
}
