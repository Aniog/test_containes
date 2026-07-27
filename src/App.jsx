import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import About from '@/components/home/About';
import Pricing from '@/components/home/Pricing';
import Contact from '@/components/home/Contact';

function App() {
  return (
    <div className="min-h-screen bg-[#0f0520] text-purple-100">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
