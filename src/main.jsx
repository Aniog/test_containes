import React from 'react';
import ReactDOM from "react-dom/client";
window.addEventListener('error', (e) => {
  document.body.innerHTML = `<div style="color:red; z-index:9999; position:relative; font-size: 20px;">${e.message}<br/>${e.filename}:${e.lineno}</div>`;
});
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import Product from "./pages/Product.jsx";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) { return { hasError: true, error }; }
  render() {
    if (this.state.hasError) return <div style={{color: 'red', zIndex: 9999, position: 'relative'}}>{this.state.error.toString()}</div>;
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="product/:id" element={<Product />} />
              <Route path="collections" element={<Shop />} />
              {/* Catch-all */}
              <Route path="*" element={<div className="pt-24 text-center min-h-[60vh] flex items-center justify-center font-serif text-3xl">Page not found</div>} />
            </Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
