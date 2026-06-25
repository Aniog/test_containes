import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Products from './components/home/Products';
import WhyUs from './components/home/WhyUs';
import Industries from './components/home/Industries';
import Contact from './components/home/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <WhyUs />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

