import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar    from './components/Navbar';
import Footer    from './components/Footer';
import Home      from './pages/Home';
import Specimens from './pages/Specimens';
import Gallery   from './pages/Gallery';
import Contact   from './pages/Contact';
import './index.css';

const PAGE_TRANSITION = {
  initial:    { opacity: 0, y: 12 },
  animate:    { opacity: 1, y: 0 },
  exit:       { opacity: 0, y: -8 },
  transition: { duration: 0.35, ease: 'easeInOut' },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={location.pathname} {...PAGE_TRANSITION}>
        <Routes location={location}>
          <Route path="/"          element={<Home />} />
          <Route path="/specimens" element={<Specimens />} />
          <Route path="/gallery"   element={<Gallery />} />
          <Route path="/contact"   element={<Contact />} />
        </Routes>
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-parchment font-sans">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>
  );
}

