import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Specimens from '@/pages/Specimens';
import Gallery from '@/pages/Gallery';
import Contact from '@/pages/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-obsidian flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/specimens" element={<Specimens />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

