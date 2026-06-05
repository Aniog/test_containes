import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import About from './components/home/About';
import ContactCTA from './components/home/ContactCTA';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <ContactCTA />
      <Footer />
    </div>
  );
}

export default App;
