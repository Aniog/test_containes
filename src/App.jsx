import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import MemoryDetail from './pages/MemoryDetail';
import About from './pages/About';
import Contribute from './pages/Contribute';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-void text-starlight">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/memory/:id" element={<MemoryDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contribute" element={<Contribute />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
