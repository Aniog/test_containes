import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import Knowledge from '@/pages/Knowledge';
import History from '@/pages/History';
import Safety from '@/pages/Safety';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0f1e] flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/history" element={<History />} />
            <Route path="/safety" element={<Safety />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
