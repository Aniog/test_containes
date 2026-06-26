import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import HowItWorks from "@/pages/HowItWorks";
import Products from "@/pages/Products";
import CaseStudies from "@/pages/CaseStudies";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import "./App.css";

function PreviewNavigateBridge() {
  const navigate = useNavigate();
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = navigate;
    return () => {
      if (window.__STRIKINGLY_PREVIEW_NAVIGATE__ === navigate) {
        delete window.__STRIKINGLY_PREVIEW_NAVIGATE__;
      }
    };
  }, [navigate]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <PreviewNavigateBridge />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/products" element={<Products />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
