import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import HowItWorks from './pages/HowItWorks';
import Products from './pages/Products';
import { Toaster } from "sonner";

// Placeholder components for remaining pages
const CaseStudies = () => (
  <Layout>
    <div className="py-24 max-w-7xl mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold mb-8">Case Studies</h1>
      <p className="text-lg text-slate-600">See how we've helped businesses like yours save costs and improve quality.</p>
    </div>
  </Layout>
);

const Blog = () => (
  <Layout>
    <div className="py-24 max-w-7xl mx-auto px-4 text-center">
      <h1 className="text-4xl font-bold mb-8">Sourcing Blog</h1>
      <p className="text-lg text-slate-600">Expert insights and tips for navigating the China supply chain.</p>
    </div>
  </Layout>
);

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/products" element={<Products />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
