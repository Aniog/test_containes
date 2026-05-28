import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Gallery from './components/Gallery';
import Specs from './components/Specs';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-zinc-950 min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Gallery />
      <Specs />
      <Footer />
    </div>
  );
}
