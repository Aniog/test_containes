import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Microscope, Bacteria, Atom, Droplets } from 'lucide-react';

const homeConfig = strkImgConfig || { imageRatio: 'default' }; // Ensure there's a fallback

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // We wrap it in a setTimeout, or just call directly, as we use placeholder
    if (strkImgConfig && ImageHelper) {
        return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 opacity-40 mix-blend-screen"
          data-strk-bg-id="hero-bg-microcosmos"
          data-strk-bg="microscopic world abstract colorful cellular biology"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/80 to-slate-950 z-10" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
          <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 hidden">
            Enter the MicroCosmos
          </h1>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white">
            Enter the MicroCosmos
          </h1>
          <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-300 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
            A limitless universe exists right beneath our fingertips. Discover the profound beauty and complexity of the microscopic world.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
            Begin the Journey
          </button>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 id="features-title" className="text-3xl md:text-5xl font-bold mb-6 text-emerald-400">
            The Invisible Foundations of Life
          </h2>
          <p id="features-desc" className="text-lg text-slate-400 max-w-3xl mx-auto">
            From the intricate dance of cellular structures to the fundamental building blocks of matter, there is an entire ecosystem operating in dimensions we cannot see.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { id: 'cellular', icon: Bacteria, title: 'Cellular Ecosystems', desc: 'Explore the bustling metropolis within a single drop of water.' },
            { id: 'atomic', icon: Atom, title: 'Atomic Structures', desc: 'The architectural blueprints that define reality itself.' },
            { id: 'microscopic', icon: Microscope, title: 'Micro-organisms', desc: 'The unseen creatures that balance our global biosphere.' },
            { id: 'chemical', icon: Droplets, title: 'Fluid Dynamics', desc: 'How chemical reactions govern microscopic motion.' }
          ].map((feature, i) => (
             <div key={i} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/50 transition-colors duration-300 group">
                <div className="bg-slate-800 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-emerald-400" />
                </div>
                <h3 id={`feature-title-${feature.id}`} className="text-xl font-semibold mb-3 text-slate-100">{feature.title}</h3>
                <p id={`feature-desc-${feature.id}`} className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
             </div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-slate-900 w-full">
         <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 id="gallery-title" className="text-3xl md:text-5xl font-bold mb-4 text-cyan-400">Visualizing the Unseen</h2>
              <p id="gallery-subtitle" className="text-slate-400 text-lg max-w-2xl">Breathtaking imagery captured through advanced electron microscopy, revealing forms that rival modern abstract art.</p>
            </div>
            <button className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-2">
              View full gallery →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {/* Main large image */}
            <div className="lg:col-span-2 lg:row-span-2 relative rounded-2xl overflow-hidden group">
              <img 
                data-strk-img-id="gallery-main-micro"
                data-strk-img="[gallery-title] [gallery-subtitle] colorful microscopic cells"
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Colorful Microscopic Cells"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-8 flex flex-col justify-end">
                <h3 className="text-2xl font-bold text-white mb-2">Neural Pathways</h3>
                <p className="text-slate-300">Magnified 15,000x</p>
              </div>
            </div>

            {/* Smaller images */}
            {[
              { id: 'virus', title: 'Viral Structures', desc: 'Intricate protein shells', query: 'virus structure under microscope' },
              { id: 'crystal', title: 'Crystallization', desc: 'Mineral formation', query: 'microscopic crystal structure polarized light' },
              { id: 'biology', title: 'Cell Division', desc: 'The genesis of life', query: 'mitosis cell division under microscope' },
              { id: 'fiber', title: 'Synthetic Fibers', desc: 'Nanotechnology', query: 'nanotubes microscopic structure' }
            ].map((img, i) => (
              <div key={i} className="relative rounded-2xl overflow-hidden group">
                <img 
                  data-strk-img-id={`gallery-thumb-${img.id}`}
                  data-strk-img={`${img.query}`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                 <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-end">
                  <h3 id={`gallery-item-${img.id}`} className="text-lg font-bold text-white mb-1">{img.title}</h3>
                  <p id={`gallery-item-desc-${img.id}`} className="text-xs text-emerald-400">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
         </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24 px-4 max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <h2 id="story-title" className="text-3xl md:text-4xl font-bold text-slate-100 leading-tight">
              A Universe in a <span className="text-emerald-400">Speck of Dust</span>
            </h2>
            <p id="story-p1" className="text-slate-400 text-lg leading-relaxed">
              When we look up at the night sky, we are awed by the vastness of the cosmos. Yet, looking downward through a lens reveals an equally staggering expanse of complexity and order. 
            </p>
            <p id="story-p2" className="text-slate-400 text-lg leading-relaxed">
              Every leaf, every grain of sand, and every drop of ocean water contains galaxies of interacting molecules, living entities, and geometric perfection that our naked eyes can never appreciate.
            </p>
            <div className="pt-4">
              <button className="text-white border-b-2 border-emerald-500 pb-1 hover:text-emerald-400 transition-colors">
                Read the Manifesto
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative w-full h-[500px]">
            <div className="absolute inset-4 border-2 border-emerald-500/20 rounded-3xl transform translate-x-4 translate-y-4"></div>
            <img 
              data-strk-img-id="narrative-micro"
              data-strk-img="[story-title] [story-p1] detailed beautiful microscopic organism"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Microscopic details"
              className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Grid Pattern Background Footer */}
      <footer className="relative bg-slate-950 pt-24 pb-12 overflow-hidden border-t border-slate-900">
         <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50 text-slate-800"></div>
         <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center flex flex-col items-center">
            <Microscope className="w-12 h-12 text-emerald-500 mb-6" />
            <h2 className="text-2xl font-bold text-white mb-6">MicroCosmos</h2>
            <div className="flex gap-6 mb-12 text-slate-400 text-sm">
              <a href="#" className="hover:text-emerald-400">Expeditions</a>
              <a href="#" className="hover:text-emerald-400">Research</a>
              <a href="#" className="hover:text-emerald-400">Gallery</a>
              <a href="#" className="hover:text-emerald-400">About</a>
            </div>
            <p className="text-slate-600 text-xs">© 2026 MicroCosmos Explorations. Visualizing the invisible.</p>
         </div>
      </footer>
    </div>
  );
};

export default Home;