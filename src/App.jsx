import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Layout from "@/components/layout/Layout";
import HomePage from "@/pages/HomePage";
import CollectionPage from "@/pages/CollectionPage";
import ProductPage from "@/pages/ProductPage";
import AboutPage from "@/pages/AboutPage";
import JournalPage from "@/pages/JournalPage";
import NotFoundPage from "@/pages/NotFoundPage";
import { CartProvider } from "@/context/CartContext";
import "./App.css";

/**
 * Preview-route bridge — lets the parent iframe navigate the SPA via postMessage
 * without triggering a full page reload.
 */
function PreviewRouterBridge() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts = {}) => {
      navigate(path, { replace: opts.replace });
    };
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__;
    };
  }, [navigate]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.parent === window) return;
    window.requestAnimationFrame(() => {
      window.parent.postMessage(
        {
          channel: "strikingly-preview",
          version: 1,
          type: "route:changed",
          payload: {
            url: window.location.href,
            path: location.pathname + location.search + location.hash,
            pathname: location.pathname,
            title: document.title,
            source: "spa",
          },
        },
        "*"
      );
    });
  }, [location]);

  return null;
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <PreviewRouterBridge />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<CollectionPage />} />
            <Route path="/shop/:category" element={<CollectionPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
