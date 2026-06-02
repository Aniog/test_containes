import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from './strk-img-config.json';
import Navigation from './components/nav/Navigation.jsx';
import ThePattern from './pages/ThePattern.jsx';
import SpeciesIndex from './pages/SpeciesIndex.jsx';
import Herbarium from './pages/Herbarium.jsx';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const rootRef = useRef(null);

  useEffect(() => {
    const cleanup = ImageHelper.loadImages(strkImgConfig, rootRef.current);
    return cleanup;
  }, []);

  return (
    <div ref={rootRef} className="min-h-screen bg-clay font-sans text-ink">
      <Navigation />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<ThePattern />} />
        <Route path="/species" element={<SpeciesIndex />} />
        <Route path="/herbarium" element={<Herbarium />} />
      </Routes>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
