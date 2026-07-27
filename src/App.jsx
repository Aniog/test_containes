import { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import './App.css';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';
import Services from '@/pages/Services';
import HowItWorks from '@/pages/HowItWorks';
import Products from '@/pages/Products';
import CaseStudies from '@/pages/CaseStudies';
import Blog from '@/pages/Blog';
import Contact from '@/pages/Contact';

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, appRef.current);
  }, []);

  return (
    <div ref={appRef}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/products" element={<Products />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
