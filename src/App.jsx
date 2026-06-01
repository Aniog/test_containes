import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Archive from './pages/Archive';
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
          <Route path="/archive" element={<Archive />} />
          <Route path="/about" element={<About />} />
          <Route path="/contribute" element={<Contribute />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
