import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/wine/Navbar';
import Footer from './components/wine/Footer';
import Home from './pages/Home';
import CollectionPage from './pages/CollectionPage';
import RegionsPage from './pages/RegionsPage';
import PairingsPage from './pages/PairingsPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-wine-deep min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<CollectionPage />} />
            <Route path="/regions" element={<RegionsPage />} />
            <Route path="/pairings" element={<PairingsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
