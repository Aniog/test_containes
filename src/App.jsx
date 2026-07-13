import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Organisms from './components/Organisms';
import Facts from './components/Facts';
import Explore from './components/Explore';
import Footer from './components/Footer';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-cosmos-black min-h-screen font-sans">
      {/* Sticky nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cosmos-black/80 backdrop-blur-md border-b border-cosmos-border/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <a href="#" className="font-display font-bold text-xl text-cosmos-text">
            Micro<span className="text-cosmos-teal italic">Cosmos</span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            {[
              { label: 'About', href: '#about' },
              { label: 'Gallery', href: '#gallery' },
              { label: 'Organisms', href: '#organisms' },
              { label: 'Facts', href: '#facts' },
              { label: 'Explore', href: '#explore' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-cosmos-secondary hover:text-cosmos-teal transition-colors duration-200 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Gallery />
        <Organisms />
        <Facts />
        <Explore />
      </main>
      <Footer />
    </div>
  );
}

export default App;
