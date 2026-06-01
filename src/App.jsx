import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import FeaturedGames from './components/sections/FeaturedGames';
import TopSellers from './components/sections/TopSellers';
import Genres from './components/sections/Genres';
import Reviews from './components/sections/Reviews';
import News from './components/sections/News';
import ArticlesSection from './components/sections/ArticlesSection';
import DealsSection from './components/sections/DealsSection';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="bg-[#0f1923] min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <DealsSection />
        <FeaturedGames />
        <TopSellers />
        <Genres />
        <ArticlesSection />
        <Reviews />
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;
