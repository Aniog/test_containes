import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// Placeholder Pages for now
const Services = () => <div className="py-20 text-center">Services Page</div>;
const HowItWorks = () => <div className="py-20 text-center">How It Works Page</div>;
const Products = () => <div className="py-20 text-center">Products Page</div>;
const CaseStudies = () => <div className="py-20 text-center">Case Studies Page</div>;
const Blog = () => <div className="py-20 text-center">Blog Page</div>;
const Contact = () => <div className="py-20 text-center">Contact Page</div>;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/products" element={<Products />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
