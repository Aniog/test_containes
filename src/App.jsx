import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Categories from './components/Categories';
import Gallery from './components/Gallery';
import Facts from './components/Facts';
import Mosaic from './components/Mosaic';
import Techniques from './components/Techniques';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-cosmos-bg min-h-screen font-sans">
      <Hero />
      <Introduction />
      <Categories />
      <Gallery />
      <Facts />
      <Mosaic />
      <Techniques />
      <Footer />
    </div>
  );
}

export default App;
