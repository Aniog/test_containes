import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ExplorePage from './pages/ExplorePage';
import MemoryDetailPage from './pages/MemoryDetailPage';
import AboutPage from './pages/AboutPage';
import SubmitPage from './pages/SubmitPage';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-space-black text-slate-100 flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/memory/:id" element={<MemoryDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/submit" element={<SubmitPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

