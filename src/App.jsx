import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Knowledge from './pages/Knowledge';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-cosmos text-moonlight">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/"          element={<Home />} />
            <Route path="/knowledge" element={<Knowledge />} />
            <Route path="/gallery"   element={<Gallery />} />
            <Route path="/contact"   element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
