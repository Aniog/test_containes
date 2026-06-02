import { useState, useCallback, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import './App.css';
import GlitchHome from './pages/GlitchHome';
import Works from './pages/Works';
import Manifesto from './pages/Manifesto';
import BottomNav from './components/nav/BottomNav';
import SvgFilters from './components/SvgFilters';
import LiquidTransitionCanvas, { useLiquidTransition } from './components/transitions/LiquidTransition';

function AppInner() {
  const navigate = useNavigate();
  const location = useLocation();
  const { canvasRef, triggerTransition } = useLiquidTransition();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Expose navigate for the preview bridge
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, opts) => {
      navigate(path, opts);
    };
  }, [navigate]);

  const handleNavigate = useCallback(async (path) => {
    if (path === location.pathname || isTransitioning) return;
    setIsTransitioning(true);
    await triggerTransition(() => {
      navigate(path);
    });
    setIsTransitioning(false);
  }, [location.pathname, isTransitioning, triggerTransition, navigate]);

  return (
    <div className="relative min-h-screen" style={{ background: '#0A0010' }}>
      {/* Global SVG filter definitions */}
      <SvgFilters />

      {/* WebGL transition canvas */}
      <LiquidTransitionCanvas canvasRef={canvasRef} />

      {/* Page content */}
      <main style={{ paddingBottom: '72px' }}>
        <Routes>
          <Route path="/" element={<GlitchHome onNavigate={handleNavigate} />} />
          <Route path="/works" element={<Works />} />
          <Route path="/manifesto" element={<Manifesto />} />
        </Routes>
      </main>

      {/* Bottom navigation */}
      <BottomNav onNavigate={handleNavigate} />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}

