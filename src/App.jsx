import './App.css';
import Navbar from './components/wiki/Navbar';
import Hero from './components/wiki/Hero';
import Features from './components/wiki/Features';
import HowItWorks from './components/wiki/HowItWorks';
import Architecture from './components/wiki/Architecture';
import TechStack from './components/wiki/TechStack';
import QuickStart from './components/wiki/QuickStart';
import Footer from './components/wiki/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Architecture />
        <TechStack />
        <QuickStart />
      </main>
      <Footer />
    </div>
  );
}

export default App;
