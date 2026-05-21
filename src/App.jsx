import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/wiki/Navbar';
import Hero from './components/wiki/Hero';
import Features from './components/wiki/Features';
import QuickStart from './components/wiki/QuickStart';
import Footer from './components/wiki/Footer';
import HowItWorksPage from './pages/HowItWorksPage';

function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <QuickStart />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#0a0a0f]">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
