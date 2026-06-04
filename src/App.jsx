import Navbar from './components/apple-mini/Navbar';
import Hero from './components/apple-mini/Hero';
import Features from './components/apple-mini/Features';
import Performance from './components/apple-mini/Performance';
import Design from './components/apple-mini/Design';
import Specs from './components/apple-mini/Specs';
import Buy from './components/apple-mini/Buy';
import Footer from './components/apple-mini/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Performance />
      <Design />
      <Specs />
      <Buy />
      <Footer />
    </div>
  );
}

export default App;
