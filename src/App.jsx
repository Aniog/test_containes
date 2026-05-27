import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Products from './components/sections/Products';
import Capability from './components/sections/Capability';
import Industries from './components/sections/Industries';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Capability />
      <Industries />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
