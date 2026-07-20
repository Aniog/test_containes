import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import App from "./App.jsx";
import Collections from './pages/Collections.jsx';
import ProductDetail from './pages/ProductDetail.jsx';
import { CartProvider } from './context/CartContext.jsx';
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </Layout>
      </Router>
    </CartProvider>
  </React.StrictMode>,
);
