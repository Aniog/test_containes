import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Advantages from './components/sections/Advantages';
import Cases from './components/sections/Cases';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#1A202C]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Advantages />
      <Cases />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
