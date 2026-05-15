import Navbar from './components/home/Navbar';
import Hero from './components/home/Hero';
import About from './components/home/About';
import Products from './components/home/Products';
import Advantages from './components/home/Advantages';
import Cases from './components/home/Cases';
import Contact from './components/home/Contact';
import Footer from './components/home/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <Advantages />
      <Cases />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
