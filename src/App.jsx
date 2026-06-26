import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import HowItWorksPage from './pages/HowItWorks';
import ProductsPage from './pages/Products';
import CaseStudiesPage from './pages/CaseStudies';
import BlogPage from './pages/Blog';
import { Toaster } from "sonner";

// Placeholder components for other pages

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Toaster position="top-center" richColors />
    </Router>
  );
}

export default App;
