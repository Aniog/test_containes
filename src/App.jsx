import Navbar from './components/Navbar';
import Hero from './components/home/Hero';
import Products from './components/home/Products';
import Features from './components/home/Features';
import Contact from './components/home/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F4F6F9]">
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
