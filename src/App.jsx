import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import Hero from './components/hero/Hero';
import DealsSection from './components/deals/DealsSection';
import NewsSection from './components/news/NewsSection';
import ArticleSection from './components/articles/ArticleSection';
import StoreSection from './components/store/StoreSection';
import Footer from './components/footer/Footer';
import ArticleAdminPage from './pages/ArticleAdminPage';
import './App.css';

function SitePage() {
  const [cartCount, setCartCount] = useState(0);
  return (
    <div className="min-h-screen bg-game-bg text-game-text font-sans">
      <Navbar cartCount={cartCount} />
      <Hero />
      <DealsSection />
      <NewsSection />
      <ArticleSection />
      <StoreSection onCartUpdate={setCartCount} />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SitePage />} />
        <Route path="/admin/articles" element={<ArticleAdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;
