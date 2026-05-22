import Navbar from './components/home/Navbar';
import HeroSection from './components/home/HeroSection';
import FeaturesSection from './components/home/FeaturesSection';
import DemoSection from './components/home/DemoSection';
import HowItWorksSection from './components/home/HowItWorksSection';
import TestimonialsSection from './components/home/TestimonialsSection';
import Footer from './components/home/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0f1117] text-slate-100">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <DemoSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}

export default App;
