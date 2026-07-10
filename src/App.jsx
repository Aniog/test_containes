import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Categories from './components/Categories';
import Facts from './components/Facts';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-cosmos-deep min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Categories />
      <Facts />
      <Footer />
    </div>
  );
}

export default App;
