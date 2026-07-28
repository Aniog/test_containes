import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './pages/Home.jsx';
// Placeholder components for other routes
const Services = () => <div className="p-8 text-center text-2xl">Services Page</div>;
const HowItWorks = () => <div className="p-8 text-center text-2xl">How It Works Page</div>;
const Products = () => <div className="p-8 text-center text-2xl">Products We Source Page</div>;
const CaseStudies = () => <div className="p-8 text-center text-2xl">Case Studies Page</div>;
const Blog = () => <div className="p-8 text-center text-2xl">Blog Page</div>;
const Contact = () => <div className="p-8 text-center text-2xl">Contact Page</div>;

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
