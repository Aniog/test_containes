import { useState } from 'react';
import Navbar from './components/nav/Navbar';
import Hero from './components/hero/Hero';
import DealsSection from './components/deals/DealsSection';
import NewsSection from './components/news/NewsSection';
import StoreSection from './components/store/StoreSection';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div className="min-h-screen bg-game-bg text-game-text font-sans">
      <Navbar cartCount={cartCount} />
      <Hero />
      <DealsSection />
      <NewsSection />
      <StoreSection onCartUpdate={setCartCount} />
      <Footer />
    </div>
  );
}

export default App;
