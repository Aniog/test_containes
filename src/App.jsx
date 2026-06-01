import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from '@/components/ui/Navigation';
import Footer from '@/components/ui/Footer';
import Home from '@/pages/Home';
import Explore from '@/pages/Explore';
import Contribute from '@/pages/Contribute';
import About from '@/pages/About';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-space-black flex flex-col">
        <Navigation />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/contribute" element={<Contribute />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
