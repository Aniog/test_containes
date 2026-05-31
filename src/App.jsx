import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import MemoryPage from './pages/MemoryPage';
import Submit from './pages/Submit';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cosmos-black text-memory-white font-inter">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/memory/:id" element={<MemoryPage />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

