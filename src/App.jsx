import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from '@/components/layout/Nav';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Projects from '@/pages/Projects';
import ProjectDetail from '@/pages/ProjectDetail';
import Materials from '@/pages/Materials';
import Philosophy from '@/pages/Philosophy';
import './App.css';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
