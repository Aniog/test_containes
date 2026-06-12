import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/home/Hero';
import Products from './components/home/Products';
import WhyUs from './components/home/WhyUs';
import Contact from './components/home/Contact';

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
