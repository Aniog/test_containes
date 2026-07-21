import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Gallery from './components/Gallery';
import FeaturedSubjects from './components/FeaturedSubjects';
import MicroWorlds from './components/MicroWorlds';
import PhotoShowcase from './components/PhotoShowcase';
import Facts from './components/Facts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-cosmos-dark min-h-screen text-cosmos-light">
      <Navbar />
      <Hero />
      <Introduction />
      <Gallery />
      <FeaturedSubjects />
      <MicroWorlds />
      <PhotoShowcase />
      <Facts />
      <Footer />
    </div>
  );
}

export default App;
