import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/mountain/Navbar';
import Footer from './components/mountain/Footer';
import Home from './pages/Home';
import Geography from './pages/Geography';
import Equipment from './pages/Equipment';
import Teams from './pages/Teams';
import Safety from './pages/Safety';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/geography" element={<Geography />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/safety" element={<Safety />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

