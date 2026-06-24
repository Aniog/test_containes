import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" className="py-24 px-4 bg-slate-900" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8 text-left">
            <h2 id="about-label" className="text-sm uppercase tracking-[0.3em] text-emerald-500 font-bold">
              The Hidden Realm
            </h2>
            <h3 id="about-title" className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Where scale defies imagination
            </h3>
            <p id="about-desc" className="text-lg text-slate-400 leading-relaxed">
              Beneath the threshold of human vision lies a world of breathtaking complexity. From the intricate machinery of a single cell to the alien landscapes of specialized organisms, the MicroCosmos is a frontier that remains largely unexplored yet fundamental to all life on Earth.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800">
                <h4 className="text-emerald-400 font-bold mb-2">Infinite Detail</h4>
                <p className="text-sm text-slate-400">Discover patterns and structures that repeat across all levels of existence.</p>
              </div>
              <div className="p-6 rounded-2xl bg-slate-950/50 border border-slate-800">
                <h4 className="text-emerald-400 font-bold mb-2">Biological Wonders</h4>
                <p className="text-sm text-slate-400">Observe the fundamental building blocks of life in their natural environment.</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
             <div className="absolute -inset-4 bg-emerald-500/10 blur-3xl rounded-full z-0" />
             <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl z-10">
                <img 
                  data-strk-img-id="about-visual"
                  data-strk-img="[about-title] [about-desc] microscopic world"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="Microscopic World"
                  className="w-full h-full object-cover"
                />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
