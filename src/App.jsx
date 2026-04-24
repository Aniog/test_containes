import Navbar from './components/ai-site/Navbar';
import Hero from './components/ai-site/Hero';
import Features from './components/ai-site/Features';
import HowItWorks from './components/ai-site/HowItWorks';
import Pricing from './components/ai-site/Pricing';
import Testimonials from './components/ai-site/Testimonials';
import CTA from './components/ai-site/CTA';
import Footer from './components/ai-site/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#050816]">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
