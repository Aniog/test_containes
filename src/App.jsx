import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import MemoryPage from './pages/MemoryPage';
import About from './pages/About';
import Submit from './pages/Submit';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-space-black text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/memory/:id" element={<MemoryPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/submit" element={<Submit />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
