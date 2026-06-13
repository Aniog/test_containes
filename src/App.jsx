import './App.css';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Products from './components/home/Products';
import Features from './components/home/Features';
import Contact from './components/home/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

