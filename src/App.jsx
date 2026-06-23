import Hero from './components/home/Hero';
import Introduction from './components/home/Introduction';
import Gallery from './components/home/Gallery';
import Categories from './components/home/Categories';
import StunningShots from './components/home/StunningShots';
import Facts from './components/home/Facts';
import Footer from './components/home/Footer';

function App() {
  return (
    <div className="bg-cosmos-bg min-h-screen text-cosmos-text">
      <Hero />
      <Introduction />
      <Gallery />
      <Categories />
      <StunningShots />
      <Facts />
      <Footer />
    </div>
  );
}

export default App;
