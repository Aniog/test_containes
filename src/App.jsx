import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/komodo/Navbar';
import Footer from './components/komodo/Footer';
import Hero from './components/komodo/Hero';
import About from './components/komodo/About';
import Attractions from './components/komodo/Attractions';
import BestTime from './components/komodo/BestTime';
import TravelTips from './components/komodo/TravelTips';
import Gallery from './components/komodo/Gallery';
import Tours from './pages/Tours';
import AdminTours from './pages/AdminTours';

const HomePage = () => (
  <>
    <Hero />
    <About />
    <Attractions />
    <BestTime />
    <TravelTips />
    <Gallery />
  </>
);

function App() {
  return (
    <BrowserRouter>
      <div className="font-sans bg-mist text-stone">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/admin/tours" element={<AdminTours />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

