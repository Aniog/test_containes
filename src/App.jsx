import './App.css';
import Navbar from '@/components/nav/Navbar.jsx';
import Hero from '@/components/home/Hero.jsx';
import PlatformBanner from '@/components/home/PlatformBanner.jsx';
import ArticlesSection from '@/components/articles/ArticlesSection.jsx';
import DealsSection from '@/components/deals/DealsSection.jsx';
import StoreSection from '@/components/store/StoreSection.jsx';
import Footer from '@/components/home/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />
      <main>
        <Hero />
        <PlatformBanner />
        <ArticlesSection />
        <DealsSection />
        <StoreSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

