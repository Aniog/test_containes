import Navbar from './components/Navbar';
import Hero from './components/home/Hero';
import Products from './components/products/Products';
import Features from './components/home/Features';
import About from './components/home/About';
import Contact from './components/home/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy font-sans">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
