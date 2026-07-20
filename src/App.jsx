import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/layout/CartDrawer";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }
  static getDerivedStateFromError(error) {
    console.error("[APP ERROR] getDerivedStateFromError", error);
    return { error };
  }
  componentDidCatch(error, info) {
    console.error("[APP ERROR] componentDidCatch", error, info);
  }
  render() {
    if (this.state.error) {
      return (
        <div className="p-6 text-sm text-red-600">
          <p className="font-semibold">Something went wrong.</p>
          <pre className="mt-2 whitespace-pre-wrap">{this.state.error.message}</pre>
          <pre className="mt-2 text-xs">{this.state.error.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  console.log("[DEBUG] App rendering");
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-background text-ink">
          <Navbar />
          <CartDrawer />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default function Root() {
  console.log("[DEBUG] Root rendering");
  return (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}
