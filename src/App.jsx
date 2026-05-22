import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CodeDemo from './components/CodeDemo';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CodeDemo />
        <HowItWorks />
        <Testimonials />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
