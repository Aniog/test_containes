import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import HeroSection from '@/components/HeroSection';
import GallerySection from '@/components/GallerySection';
import FeatureSection from '@/components/FeatureSection';
import './App.css';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Load images for the entire app since it's a single page
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div className="min-h-screen bg-neutral-950 text-slate-100 font-sans" ref={containerRef}>
      <header className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-neutral-800">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-wider text-emerald-400">MICROCOSMOS</div>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-neutral-300">
            <a href="#home" className="hover:text-emerald-400 transition-colors">Home</a>
            <a href="#wonders" className="hover:text-emerald-400 transition-colors">Wonders</a>
            <a href="#gallery" className="hover:text-emerald-400 transition-colors">Gallery</a>
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
          </nav>
        </div>
      </header>
      
      <main>
        <HeroSection />
        <FeatureSection />
        <GallerySection />
      </main>

      <footer className="bg-neutral-900 border-t border-neutral-800 py-12 mt-20" id="about">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-emerald-400 mb-4">MICROCOSMOS</h2>
          <p className="text-neutral-400 max-w-md mx-auto mb-8" id="footer-desc">
            Exploring the hidden beauty of the microscopic world. A journey into the cellular architecture and tiny organisms that make up our universe.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <img 
               data-strk-img-id="footer-micro-img-1"
               data-strk-img="[footer-desc]"
               data-strk-img-ratio="1x1"
               data-strk-img-width="400"
               src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
               alt="Microscopic view"
               className="rounded-lg opacity-50 hover:opacity-100 transition-opacity"
            />
            <img 
               data-strk-img-id="footer-micro-img-2"
               data-strk-img="[footer-desc]"
               data-strk-img-ratio="1x1"
               data-strk-img-width="400"
               src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
               alt="Cellular details"
               className="rounded-lg opacity-50 hover:opacity-100 transition-opacity"
            />
            <img 
               data-strk-img-id="footer-micro-img-3"
               data-strk-img="[footer-desc]"
               data-strk-img-ratio="1x1"
               data-strk-img-width="400"
               src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
               alt="Microorganisms"
               className="rounded-lg opacity-50 hover:opacity-100 transition-opacity"
            />
            <img 
               data-strk-img-id="footer-micro-img-4"
               data-strk-img="[footer-desc]"
               data-strk-img-ratio="1x1"
               data-strk-img-width="400"
               src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
               alt="Macro lens view"
               className="rounded-lg opacity-50 hover:opacity-100 transition-opacity"
            />
          </div>
          <p className="text-sm text-neutral-600">
            &copy; {new Date().getFullYear()} MicroCosmos. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
