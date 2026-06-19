import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import ProductDetail from "./pages/ProductDetail.jsx";
import Collections from "./pages/Collections.jsx";
import "./index.css";

if (import.meta.env.DEV) {
  import("./visual-edit/index.js");
}

// Placeholder for future pages
const Home = () => <App />
const About = () => <div className="pt-24 min-h-[60vh] flex items-center justify-center font-serif text-2xl">About Page Coming Soon</div>
const Journal = () => <div className="pt-24 min-h-[60vh] flex items-center justify-center font-serif text-2xl">Journal Page Coming Soon</div>

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="collections/:category" element={<Collections />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="about" element={<About />} />
          <Route path="journal" element={<Journal />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
