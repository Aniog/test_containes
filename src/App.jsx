import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Products from './components/home/Products';
import Features from './components/home/Features';
import About from './components/home/About';
import Trust from './components/home/Trust';
import Contact from './components/home/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <Hero />
        <Trust />
        <Products />
        <Features />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App
