import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Generator from './pages/Generator';
import Dashboard from './pages/Dashboard';
import Social from './pages/Social';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#050510] text-[#e8d5ff]">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/generator" element={<Generator />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/social" element={<Social />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
