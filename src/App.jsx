import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import MemoryDetail from './pages/MemoryDetail';
import Submit from './pages/Submit';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-space-black text-slate-100">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explore/:category" element={<Explore />} />
          <Route path="/explore/:category/:subcategory" element={<Explore />} />
          <Route path="/memory/:id" element={<MemoryDetail />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
