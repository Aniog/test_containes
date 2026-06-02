import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navigation from '@/components/nav/Navigation';
import Home from '@/pages/Home';
import Collections from '@/pages/Collections';
import Lookbook from '@/pages/Lookbook';
import Studio from '@/pages/Studio';
import './App.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Register navigate function for preview bridge
const NavigateBridge = () => {
  const location = useLocation();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts) => {
        window.history[opts?.replace ? 'replaceState' : 'pushState']({}, '', path);
        window.dispatchEvent(new PopStateEvent('popstate', { state: {} }));
      };
    }
  }, [location]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <NavigateBridge />
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/lookbook" element={<Lookbook />} />
        <Route path="/studio" element={<Studio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

