import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/layout/Nav.jsx';
import Footer from './components/layout/Footer.jsx';
import Descending from './pages/Descending.jsx';
import TheReef from './pages/TheReef.jsx';
import LuminousLife from './pages/LuminousLife.jsx';
import './App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
};

const AppLayout = () => (
  <>
    <ScrollToTop />
    <Nav />
    <main>
      <Routes>
        <Route path="/" element={<Descending />} />
        <Route path="/reef" element={<TheReef />} />
        <Route path="/luminous" element={<LuminousLife />} />
      </Routes>
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;

