import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/nav/Navbar';
import Home from '@/pages/Home';
import SpeciesArchive from '@/pages/SpeciesArchive';
import DustAndLight from '@/pages/DustAndLight';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-charcoal-earth">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/species" element={<SpeciesArchive />} />
          <Route path="/dust-and-light" element={<DustAndLight />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
