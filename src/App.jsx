import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import HowItWorks from './pages/HowItWorks';
import Products from './pages/Products';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';

// Placeholder components for other pages
const Placeholder = ({ title }) => (
  <div className="pt-24 pb-16 px-4 max-w-7xl mx-auto">
    <h1 className="text-4xl font-bold mb-8 text-primary">{title}</h1>
    <p className="text-slate-600">This page is currently under development.</p>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="how-it-works" element={<HowItWorks />} />
          <Route path="products" element={<Products />} />
          <Route path="case-studies" element={<CaseStudies />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
