import Navbar from './components/wine/Navbar';
import Hero from './components/wine/Hero';
import Story from './components/wine/Story';
import Collection from './components/wine/Collection';
import Regions from './components/wine/Regions';
import Pairings from './components/wine/Pairings';
import Contact from './components/wine/Contact';
import Footer from './components/wine/Footer';

function App() {
  return (
    <div className="bg-wine-deep min-h-screen">
      <Navbar />
      <Hero />
      <Story />
      <Collection />
      <Regions />
      <Pairings />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
