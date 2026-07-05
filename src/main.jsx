import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import { ProductDetail } from "./pages/ProductDetail";
import { ImageHelper } from "@strikingly/sdk";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

function App() {
  const location = useLocation()
  const containerRef = useRef(null)

  useEffect(() => {
    if (containerRef.current) {
        const strkImgConfig = {} 
        const frameId = window.requestAnimationFrame(() => {
          try {
            ImageHelper.loadImages(strkImgConfig, containerRef.current)
          } catch(e) {
            console.log('ImageHelper mocked or not ready', e)
          }
        })
        return () => window.cancelAnimationFrame(frameId)
    }
  }, [location.pathname, location.search])

  return (
    <div ref={containerRef}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </div>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
