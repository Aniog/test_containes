import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/home/Navbar';
import Footer from '@/components/home/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Technique from '@/pages/Technique';
import Competition from '@/pages/Competition';
import Training from '@/pages/Training';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-surface">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/technique" element={<Technique />} />
            <Route path="/competition" element={<Competition />} />
            <Route path="/training" element={<Training />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
