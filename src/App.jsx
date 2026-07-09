import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Events from '@/pages/Events';
import Competitors from '@/pages/Competitors';
import Register from '@/pages/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-cream">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Events />} />
            <Route path="/competitors" element={<Competitors />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
