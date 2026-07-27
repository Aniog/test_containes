import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Layout from "@/components/site/Layout";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import HowItWorks from "@/pages/HowItWorks";
import Products from "@/pages/Products";
import CaseStudies from "@/pages/CaseStudies";
import Blog from "@/pages/Blog";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/NotFound";
import "./App.css";

const pageTitle = {
  "/": "China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China",
  "/services":
    "China Sourcing Services | Sourcing, QC & Shipping | SSourcing China",
  "/how-it-works":
    "How It Works | Our 5-Step China Sourcing Process | SSourcing China",
  "/products":
    "Products We Source from China | Categories & Examples | SSourcing China",
  "/case-studies":
    "Case Studies | China Sourcing Projects | SSourcing China",
  "/blog":
    "Blog | Sourcing, QC & Shipping Insights | SSourcing China",
  "/contact":
    "Contact SSourcing China | Get a Free Sourcing Quote",
};

const RouterBridge = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts = {}) => {
      navigate(path, opts);
    };
    return () => {
      delete window.__STRIKINGLY_PREVIEW_NAVIGATE__;
    };
  }, [navigate]);

  useEffect(() => {
    document.title = pageTitle[location.pathname] || pageTitle["/"];
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <RouterBridge />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/products" element={<Products />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
