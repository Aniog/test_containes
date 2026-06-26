import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Capabilities from "./pages/Capabilities";
import Industries from "./pages/Industries";
import About from "./pages/About";
import Contact from "./pages/Contact";

function PreviewRouteBridge() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options = {}) => {
      navigate(path, { replace: options.replace });
    };
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__;
    };
  }, [navigate]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return null;
}

function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6 py-24 bg-paper-50">
      <div className="text-center max-w-xl">
        <span className="eyebrow text-copper-600">404</span>
        <h1 className="mt-4 font-display font-semibold text-4xl md:text-5xl text-ink-900">
          We couldn't find that page.
        </h1>
        <p className="mt-4 text-ink-700 text-base md:text-lg">
          The page you were looking for has moved or no longer exists. Head
          back home to keep exploring ARTITECT MACHINERY.
        </p>
        <a
          href="/"
          className="mt-8 inline-flex items-center gap-2 bg-navy-950 hover:bg-copper-600 text-paper-50 px-7 py-3.5 rounded-full text-sm font-semibold transition-colors"
        >
          Back to home
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <PreviewRouteBridge />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;