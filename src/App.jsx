import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import HowItWorks from './pages/HowItWorks';
import Products from './pages/Products';
import CaseStudies from './pages/CaseStudies';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { Toaster } from "@/components/ui/sonner";
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // We want to re-run image loading when the DOM changes (e.g. route transitions)
    const observer = new MutationObserver(() => {
       ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    
    if (containerRef.current) {
      observer.observe(containerRef.current, { childList: true, subtree: true });
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <BrowserRouter>
      <div ref={containerRef}>
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
      </div>
      <Toaster />
    </BrowserRouter>
  )
}

export default App;
