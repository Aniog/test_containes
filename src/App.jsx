import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    // Initial load of images
    try {
      const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current);
      return cleanup;
    } catch (e) {
      console.warn('ImageHelper failed to load or is not available:', e);
    }
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-900 text-slate-50 selection:bg-emerald-500/30">
      <Navbar />
      <main>
        <Hero />
        
        {/* Info Section 1 */}
        <section id="organisms" className="py-24 bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
                  Invisible Giants
                </div>
                <h2 id="organisms-title" className="text-4xl md:text-5xl font-serif font-bold text-slate-50 mb-6 leading-tight">
                  The Microscopic Life That Rules Our Planet
                </h2>
                <p id="organisms-desc" className="text-slate-400 text-lg mb-8 leading-relaxed">
                  From the oxygen we breathe to the health of our oceans, microorganisms are the silent architects of our world. Bacteria, archaea, and single-celled eukaryotes form the foundation of life on Earth.
                </p>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-emerald-500 mb-1 font-serif">1 Trillion+</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider">Estimated Species</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-emerald-500 mb-1 font-serif">70%</div>
                    <div className="text-sm text-slate-500 uppercase tracking-wider">Oxygen Production</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 relative group">
                <div className="absolute -inset-4 bg-emerald-500/10 rounded-3xl blur-2xl group-hover:bg-emerald-500/20 transition-all" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                  <img
                    data-strk-img-id="organisms-preview-a1b2"
                    data-strk-img="[organisms-desc] [organisms-title] microscopic organisms bacteria cells"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="Microscopic Organisms"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Info Section 2 */}
        <section id="structures" className="py-24 bg-slate-900 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
              <div className="flex-1">
                <div className="inline-block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6">
                  Biological Machines
                </div>
                <h2 id="structures-title" className="text-4xl md:text-5xl font-serif font-bold text-slate-50 mb-6 leading-tight">
                  Orchestrating the Symphony of the Cell
                </h2>
                <p id="structures-desc" className="text-slate-400 text-lg mb-8 leading-relaxed">
                  Deep within every cell lies a world of molecular machines. Ribosomes, mitochondria, and motor proteins work in perfect harmony to fuel, replicate, and maintain the miracle of life.
                </p>
                <button className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors flex items-center gap-2">
                  Learn about cell mechanics <span>→</span>
                </button>
              </div>
              <div className="flex-1 relative group">
                <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-2xl group-hover:bg-blue-500/20 transition-all" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800">
                  <img
                    data-strk-img-id="structures-preview-c3d4"
                    data-strk-img="[structures-desc] [structures-title] molecular biology cell components"
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt="Cell Structures"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <Gallery />

        {/* CTA Section */}
        <section id="explore" className="py-24 relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0"
            data-strk-bg-id="cta-background-e5f6"
            data-strk-bg="[cta-title] [cta-subtitle] microscopy exploration"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          >
            <div className="absolute inset-0 bg-emerald-950/90 backdrop-blur-sm" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
            <h2 id="cta-title" className="text-4xl md:text-6xl font-serif font-bold text-slate-50 mb-8">
              Ready to Explore Further?
            </h2>
            <p id="cta-subtitle" className="text-slate-200 text-xl mb-12 font-light">
              Join our community of amateur microscopists and professional scientists as we uncover more of the hidden world.
            </p>
            <form className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-full bg-slate-900/50 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 transition-all"
              />
              <button 
                type="submit"
                onClick={(e) => e.preventDefault()}
                className="px-8 py-4 bg-emerald-500 text-slate-950 font-bold rounded-full hover:bg-emerald-400 transition-all transform hover:scale-105"
              >
                Join Newsletter
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
