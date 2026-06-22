import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { SearchIcon, Droplet, Zap, Star } from 'lucide-react';

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  const features = [
    {
      id: 'cellular-life',
      title: 'Cellular Life',
      desc: 'Discover the basic building blocks of all living organisms.',
      icon: <Droplet className="w-8 h-8 text-blue-400" />
    },
    {
      id: 'microorganisms',
      title: 'Microorganisms',
      desc: 'Explore bacteria, viruses, and fungi that shape our world.',
      icon: <Zap className="w-8 h-8 text-yellow-400" />
    },
    {
      id: 'atomic-structure',
      title: 'Atomic Wonders',
      desc: 'Dive into the fascinating realm of atoms and molecules.',
      icon: <Star className="w-8 h-8 text-purple-400" />
    }
  ];

  const galleryItems = [
    {
      id: 'tardigrade',
      title: 'The Resilient Tardigrade',
      desc: 'Also known as water bears, these microscopic animals can survive extreme conditions.',
      imgId: 'gallery-img-1'
    },
    {
      id: 'neuron',
      title: 'Neural Networks',
      desc: 'The complex web of neurons that process and transmit information in the brain.',
      imgId: 'gallery-img-2'
    },
    {
      id: 'red-blood-cells',
      title: 'Red Blood Cells',
      desc: 'Erythrocytes navigating through the intricate capillary systems of our bodies.',
      imgId: 'gallery-img-3'
    },
    {
      id: 'pollen',
      title: 'Pollen Grains',
      desc: 'A close-up look at the diverse and spiky structures of various pollen grains.',
      imgId: 'gallery-img-4'
    },
    {
      id: 'crystal',
      title: 'Crystal Formations',
      desc: 'The geometric beauty of crystalline structures grown at a microscopic scale.',
      imgId: 'gallery-img-5'
    },
    {
      id: 'diatom',
      title: 'Diatoms',
      desc: 'Single-celled algae with intricate transparent cell walls made of hydrated silica.',
      imgId: 'gallery-img-6'
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          data-strk-bg-id="hero-bg-microcosmos"
          data-strk-bg="[hero-title] [hero-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 id="hero-title" className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white text-shadow-sm">
            Journey into the MicroCosmos
          </h1>
          <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto">
            Unveiling the hidden beauty, complexity, and sheer wonder of the universe that exists beyond the reach of the naked eye.
          </p>
          <button className="bg-emerald-600 hover:bg-emerald-500 text-white px-8 py-3 rounded-full font-medium transition-colors duration-300 shadow-lg shadow-emerald-500/30">
            Explore Now
          </button>
        </div>
      </section>

      {/* Intro / Features Section */}
      <section className="py-24 px-4 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 id="features-title" className="text-4xl font-bold mb-4 text-white">The Hidden Universe</h2>
            <p id="features-subtitle" className="text-slate-400 max-w-2xl mx-auto text-lg mb-4">
              Our world is built upon foundational systems too small to see, yet powerful enough to shape reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map(feature => (
              <div key={feature.id} className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700/50 hover:border-slate-600 transition-colors">
                <div className="bg-slate-900 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                  {feature.icon}
                </div>
                <h3 id={`feature-title-${feature.id}`} className="text-2xl font-bold mb-3 text-emerald-400">{feature.title}</h3>
                <p id={`feature-desc-${feature.id}`} className="text-slate-300 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-24">
            <div>
              <h2 id="discovery-title" className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Microscopic Discoveries
              </h2>
              <p id="discovery-desc-1" className="text-slate-300 text-lg mb-6 leading-relaxed">
                Every drop of water, grain of soil, and breath of air is teeming with life and complex structures. Through the lens of powerful microscopes, we can observe ecosystems that rival our macroscopic world in diversity.
              </p>
              <p id="discovery-desc-2" className="text-slate-300 text-lg leading-relaxed">
                Understanding the microcosmos is key to medical advancements, material science, and grasping the fundamental principles of life itself.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-emerald-900/20 border border-slate-800 relative group">
              <img
                data-strk-img-id="discovery-img-1"
                data-strk-img="[discovery-title] [discovery-desc-1]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Microscopic Discovery"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 px-4 bg-slate-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative">
            <h2 id="gallery-title" className="text-4xl md:text-5xl font-bold mb-6 text-white inline-block relative z-10">
              Gallery of the Unseen
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-50"></div>
            </h2>
            <p id="gallery-subtitle" className="text-slate-400 max-w-2xl mx-auto text-lg">
              A curated collection of striking microscopic imagery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map(item => (
              <article key={item.id} className="group cursor-pointer rounded-xl overflow-hidden border border-slate-800 bg-slate-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-emerald-900/20">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    data-strk-img-id={item.imgId}
                    data-strk-img={`[gallery-item-title-${item.id}] [gallery-item-desc-${item.id}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h3 id={`gallery-item-title-${item.id}`} className="text-xl font-semibold mb-2 text-white group-hover:text-emerald-400 transition-colors">
                    {item.title}
                  </h3>
                  <p id={`gallery-item-desc-${item.id}`} className="text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Footer Section */}
      <section className="py-20 relative overflow-hidden">
         <div
          className="absolute inset-0 z-0 opacity-30 mix-blend-overlay"
          data-strk-bg-id="footer-bg-micro"
          data-strk-bg="[footer-title] [footer-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
        />
        <div className="absolute inset-0 bg-slate-950/80 z-10" />
        <div className="relative z-20 max-w-4xl mx-auto px-4 text-center">
          <h2 id="footer-title" className="text-3xl md:text-4xl font-bold mb-6 text-white">Join the Exploration</h2>
          <p id="footer-subtitle" className="text-slate-300 text-lg mb-8">
            Subscribe to our newsletter for weekly microscopic wonders delivered straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="px-6 py-3 rounded-full bg-slate-900/80 border border-slate-700 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 w-full backdrop-blur-sm"
            />
            <button type="button" className="px-8 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </section>
      
      <footer className="bg-slate-950 py-8 border-t border-slate-900 text-center text-slate-500">
        <p>© 2026 MicroCosmos. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
