import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Layout from './components/layout/Layout';
import Descending from './pages/Descending';
import TheReef from './pages/TheReef';
import LuminousLife from './pages/LuminousLife';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function PreviewBridge() {
  const navigate = useNavigate();
  useEffect(() => {
    window.__STRIKINGLY_PREVIEW_NAVIGATE__ = (path, options) => {
      navigate(path, { replace: options?.replace });
    };
  }, [navigate]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PreviewBridge />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Descending />} />
          <Route path="reef" element={<TheReef />} />
          <Route path="luminous" element={<LuminousLife />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
