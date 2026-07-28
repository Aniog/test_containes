import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import Products from "./pages/Products.jsx";
import CaseStudies from "./pages/CaseStudies.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Privacy from "./pages/legal/Privacy.jsx";
import Terms from "./pages/legal/Terms.jsx";
import "./App.css";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/products" element={<Products />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
