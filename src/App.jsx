import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Home from '@/pages/Home';
import Explore from '@/pages/Explore';
import About from '@/pages/About';
import Submit from '@/pages/Submit';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-cosmos-950 text-text-primary">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/about" element={<About />} />
            <Route path="/submit" element={<Submit />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

