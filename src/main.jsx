import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/context/CartContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import Home from "@/pages/Home";
import Shop from "@/pages/Shop";
import ProductDetail from "@/pages/ProductDetail";
import "./index.css";

window.onerror = function(msg, url, line, col, error) {
  const el = document.createElement('div');
  el.style.cssText = 'position:fixed;bottom:0;left:0;right:0;background:red;color:white;padding:20px;z-index:9999;font-family:sans-serif;font-size:14px';
  el.textContent = 'Error: ' + (msg || '') + ' | ' + (error?.stack || '');
  document.body.appendChild(el);
};

const rootEl = document.getElementById("root");

try {
  const root = ReactDOM.createRoot(rootEl);
  root.render(React.createElement(React.StrictMode, null,
    React.createElement(BrowserRouter, null,
      React.createElement(CartProvider, null,
        React.createElement("div", { className: "min-h-screen flex flex-col" },
          React.createElement(Navbar, { onCartOpen: () => {
            const event = new CustomEvent("cart:open");
            window.dispatchEvent(event);
          } }),
          React.createElement("main", { className: "flex-1" },
            React.createElement(Routes, null,
              React.createElement(Route, { path: "/", element: React.createElement(Home, null) }),
              React.createElement(Route, { path: "/shop", element: React.createElement(Shop, null) }),
              React.createElement(Route, { path: "/product/:slug", element: React.createElement(ProductDetail, null) })
            )
          ),
          React.createElement(Footer, null),
          React.createElement(CartDrawer, { open: false, onClose: () => {} })
        )
      )
    )
  ));
} catch(e) {
  rootEl.innerHTML = '<div style="color:red;padding:40px;font-family:sans-serif"><h2>Init Error</h2><pre>' + (e.message || e) + '</pre></div>';
}
