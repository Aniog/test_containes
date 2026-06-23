import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { Heart, Search, Microscope, Dna, Info } from 'lucide-react';
import strkImgConfig from '@/strk-img-config.json';
import './App.css';

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#040b16] text-[#e0e1dd] font-sans flex flex-col items-center">
      
      {/* Header Navigation */}
      <header className="w-full fixed top-0 bg-[#040b16]/90 backdrop-blur-md z-50 border-b border-[#0d1b2a]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-[#00f5d4] font-bold text-xl">
            <Microscope className="w-6 h-6" />
            <span>MicroCosmos</span>
          </div>
          <nav className="hidden md:flex gap-8 text-[#778da9] font-medium">
            <a href="#home" className="hover:text-[#00f5d4] transition-colors">Home</a>
            <a href="#gallery" className="hover:text-[#00f5d4] transition-colors">Gallery</a>
            <a href="#discoveries" className="hover:text-[#00f5d4] transition-colors">Discoveries</a>
            <a href="#about" className="hover:text-[#00f5d4] transition-colors">About</a>
          </nav>
        </div>
      </header>

      <main className="w-full pt-20 flex-grow">
        
        {/* Hero Section */}
        <section id="home" className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
             <div
                className="w-full h-full bg-cover bg-center"
                data-strk-bg-id="hero-bg-micro-1"
                data-strk-bg="[hero-title] microscopic neon cells bioluminescence space"
                data-strk-bg-ratio="16x9"
                data-strk-bg-width="1920"
              />
              <div className="absolute inset-0 bg-[#040b16]/60"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl">
            <h1 id="hero-title" className="text-5xl md:text-7xl font-bold text-white mb-6">
              The Invisible <span className="text-[#00f5d4]">Universe</span>
            </h1>
            <p id="hero-subtitle" className="text-xl text-[#778da9] mb-8 max-w-2xl mx-auto">
              Explore the breathtaking beauty and complexity of microscopic life. A world of neon colors, intricate structures, and endless mysteries hidden right beneath our eyes.
            </p>
            <a href="#gallery" className="inline-flex items-center justify-center px-8 py-3 bg-[#00f5d4] text-[#040b16] font-semibold rounded-full hover:bg-white transition-colors duration-300">
              Start Exploring
            </a>
          </div>
        </section>

        {/* Introduction / Features */}
        <section id="features" className="py-24 px-6 bg-[#0d1b2a]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 id="features-title" className="text-3xl md:text-4xl font-bold text-white mb-4">Wonders of the Microscopic Realm</h2>
              <p className="text-[#778da9] max-w-2xl mx-auto">From resilient tardigrades to complex cellular structures, the microscopic world is full of bizarre and beautiful phenomena.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { id: '1', title: 'Cellular Structures', desc: 'The fundamental building blocks of all living organisms, revealing complex internal architecture.', icon: Dna, color: 'text-[#00f5d4]' },
                { id: '2', title: 'Microorganisms', desc: 'Fascinating creatures like diatoms (water bears) that survive in the most extreme conditions out there.', icon: Microscope, color: 'text-[#f15bb5]' },
                { id: '3', title: 'Bioluminescence', desc: 'Microscopic glowing lifeforms lighting up the dark depths and creating neon spectacles.', icon: Search, color: 'text-[#fee440]' }
              ].map(feature => (
                <div key={feature.id} className="bg-[#040b16] p-8 rounded-2xl border border-white/5 hover:border-[#00f5d4]/50 transition-colors">
                  <feature.icon className={`w-12 h-12 mb-6 ${feature.color}`} />
                  <h3 id={`feature-title-${feature.id}`} className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p id={`feature-desc-${feature.id}`} className="text-[#778da9] leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-24 px-6 relative">
             <div className="text-center mb-16">
              <h2 id="gallery-title" className="text-3xl md:text-4xl font-bold text-white mb-4">Microscopic Gallery</h2>
              <p className="text-[#778da9] max-w-2xl mx-auto">Witness the unseen beauty captured through advanced electron microscopy.</p>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[
                 {id: 'g1', title: 'Dividing Cells', desc: 'Mitosis in real-time under fluorescent lights.'},
                 {id: 'g2', title: 'Tardigrade Close-up', desc: 'The resilient water bear in its natural habitat.'},
                 {id: 'g3', title: 'Viral Structures', desc: 'Complex geometric shapes of common viruses.'},
                 {id: 'g4', title: 'Neuron Networks', desc: 'Connections forming within brain tissue.'},
                 {id: 'g5', title: 'Diatom Shells', desc: 'Intricate silica walls of microscopic algae.'},
                 {id: 'g6', title: 'Red Blood Cells', desc: 'Navigating through narrow capillaries.'}
               ].map(item => (
                 <article key={item.id} className="group relative overflow-hidden rounded-xl bg-[#0d1b2a] aspect-square">
                    <img
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      data-strk-img-id={`gallery-img-${item.id}`}
                      data-strk-img={`[gallery-item-title-${item.id}] [gallery-item-desc-${item.id}] microscopic science neon`}
                      data-strk-img-ratio="1x1"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040b16]/90 via-[#040b16]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                      <h3 id={`gallery-item-title-${item.id}`} className="text-xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        {item.title}
                      </h3>
                      <p id={`gallery-item-desc-${item.id}`} className="text-sm text-[#778da9] translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                        {item.desc}
                      </p>
                    </div>
                 </article>
               ))}
            </div>
        </section>
        
        {/* Latest Discoveries (Featured Post style) */}
         <section id="discoveries" className="py-24 px-6 bg-[#0d1b2a]">
            <div className="max-w-7xl mx-auto box-border">
              <div className="flex flex-col lg:flex-row items-center gap-16">
                 <div className="w-full lg:w-1/2 relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <img
                        alt="Latest Discovery"
                        className="w-full h-full object-cover"
                        data-strk-img-id="discovery-featured-img"
                        data-strk-img="[discovery-title] novel bacteria glowing deep sea"
                        data-strk-img-ratio="4x3"
                        data-strk-img-width="800"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      />
                 </div>
                 <div className="w-full lg:w-1/2">
                    <span className="text-[#f15bb5] font-bold uppercase tracking-wider text-sm mb-4 block">Featured Discovery</span>
                    <h2 id="discovery-title" className="text-3xl md:text-4xl font-bold text-white mb-6">New Glowing Bacteria Found in Abyssal Trench</h2>
                    <p id="discovery-desc" className="text-[#778da9] leading-relaxed mb-8">
                       Researchers have recently uncovered a new strain of bioluminescent bacteria thriving in the extreme pressures of the Mariana Trench. These microscopic marvels use a previously unknown chemical pathway to produce a bright, neon-pink glow, potentially opening new avenues for medical imaging technologies.
                    </p>
                    <button className="px-8 py-3 border border-[#f15bb5] text-[#f15bb5] hover:bg-[#f15bb5] hover:text-white font-semibold rounded-full transition-colors">
                      Read Full Article
                    </button>
                 </div>
              </div>
            </div>
         </section>

      </main>

      {/* Footer */}
      <footer className="w-full bg-[#040b16] border-t border-[#0d1b2a] py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-[#00f5d4] font-bold text-lg">
            <Microscope className="w-6 h-6" />
            <span>MicroCosmos</span>
          </div>
          <p className="text-[#778da9] text-sm text-center">
            &copy; {new Date().getFullYear()} MicroCosmos Explored. All microscopic rights reserved.
          </p>
          <div className="flex gap-4">
             <a href="#" className="text-[#778da9] hover:text-white"><Heart className="w-5 h-5"/></a>
             <a href="#" className="text-[#778da9] hover:text-white"><Info className="w-5 h-5"/></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
