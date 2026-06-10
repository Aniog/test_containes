import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import HowItWorks from '@/pages/HowItWorks';
import Products from '@/pages/Products';
import CaseStudies from '@/pages/CaseStudies';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';
import './App.css';

const pageMeta = {
  '/': 'China Sourcing Agent | Supplier Verification, QC & Shipping | SSourcing China',
  '/services': 'Sourcing Services for Global Buyers | SSourcing China',
  '/how-it-works': 'How It Works | China Sourcing in 7 Steps | SSourcing China',
  '/products': 'Products We Source | 12+ Categories | SSourcing China',
  '/case-studies': 'Case Studies | Real Sourcing Outcomes | SSourcing China',
  '/blog': 'Blog | China Sourcing Insights | SSourcing China',
  '/contact': 'Contact SSourcing China | Get a Free Sourcing Quote',
};

function PageTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    const title = pageMeta[pathname] || pageMeta['/'];
    document.title = title;
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Layout>
      <PageTitle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/products" element={<Products />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Layout>
  );
}

export default App;
