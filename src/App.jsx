import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import ServicesPage from './pages/Services';
import HowItWorksPage from './pages/HowItWorks';
import ProductsWeSourcePage from './pages/ProductsWeSource';
import CaseStudiesPage from './pages/CaseStudies';
import BlogPage from './pages/Blog';
import ContactPage from './pages/Contact';
import './App.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/products" element={<ProductsWeSourcePage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
