import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import QuoteModal from './components/QuoteModal';
import Home from './pages/Home';
import Services from './pages/Services';
import HowItWorks from './pages/HowItWorks';
import Products from './pages/Products';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import './App.css';

function App() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  const openQuote = () => setQuoteOpen(true);
  const closeQuote = () => setQuoteOpen(false);

  return (
    <Router>
      <Layout onQuoteClick={openQuote}>
        <Routes>
          <Route path="/" element={<Home onQuoteClick={openQuote} />} />
          <Route path="/services" element={<Services onQuoteClick={openQuote} />} />
          <Route path="/how-it-works" element={<HowItWorks onQuoteClick={openQuote} />} />
          <Route path="/products" element={<Products onQuoteClick={openQuote} />} />
          <Route path="/case-studies" element={<CaseStudies onQuoteClick={openQuote} />} />
          <Route path="/blog/*" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <QuoteModal isOpen={quoteOpen} onClose={closeQuote} />
    </Router>
  );
}

export default App;
