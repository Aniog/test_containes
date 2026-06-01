import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/sections/Navbar';
import Footer from './components/sections/Footer';
import Home from './pages/Home';
import Deals from './pages/Deals';
import Articles from './pages/Articles';
import ReviewsPage from './pages/ReviewsPage';
import PlatformPage from './pages/PlatformPage';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-[#0f1923] min-h-screen flex flex-col">
        <Navbar />
        <main className="pt-16 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/steam" element={<PlatformPage platformKey="steam" />} />
            <Route path="/playstation" element={<PlatformPage platformKey="playstation" />} />
            <Route path="/xbox" element={<PlatformPage platformKey="xbox" />} />
            <Route path="/epic" element={<PlatformPage platformKey="epic" />} />
            <Route path="/nintendo" element={<PlatformPage platformKey="nintendo" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
