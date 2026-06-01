import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import MemoryPage from './pages/MemoryPage';
import Submit from './pages/Submit';
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <div style={{ background: '#050810', minHeight: '100vh', color: '#e8edf5' }}>
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
