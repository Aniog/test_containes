import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Nav from '@/components/nav/Nav';
import Home from '@/pages/Home';
import Collections from '@/pages/Collections';
import Lookbook from '@/pages/Lookbook';
import Studio from '@/pages/Studio';
import './App.css';

function AppContent() {
  const location = useLocation();
  const isLookbook = location.pathname === '/lookbook';

  return (
    <div className="bg-white min-h-screen font-mono">
      <Nav />
      <main className={isLookbook ? 'overflow-hidden' : ''}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collections" element={<Collections />} />
          <Route path="/lookbook" element={<Lookbook />} />
          <Route path="/studio" element={<Studio />} />
        </Routes>
      </main>
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
