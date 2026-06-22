import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

const Introduction = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 bg-slate-950 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 id="intro-title" className="text-3xl md:text-4xl font-bold text-slate-50 mb-6 tracking-tight">
            Infinite Worlds in Tiny Spaces
          </h2>
          <p id="intro-desc" className="text-slate-300 text-lg leading-relaxed mb-8 font-light">
            Every drop of water, every grain of sand, and every leaf on a tree is a bustling metropolis of microscopic life. The MicroCosmos is not just a place, but a dimension of reality that influences our world in profound ways, from oxygen production to human health.
          </p>
          <div className="grid grid-cols-2 gap-8 text-center">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <span className="block text-4xl font-bold text-teal-400 mb-2">1M+</span>
              <span className="text-slate-400 text-sm uppercase tracking-wider font-semibold">Species Identified</span>
            </div>
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <span className="block text-4xl font-bold text-purple-400 mb-2">10^30</span>
              <span className="text-slate-400 text-sm uppercase tracking-wider font-semibold">Cells on Earth</span>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-teal-500/10 grayscale-[0.2] hover:grayscale-0 transition-all duration-700">
            <img
              data-strk-img-id="intro-micro-image"
              data-strk-img="[intro-desc] [intro-title] Microscopic organism detail"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Microscopic World"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-teal-500 p-8 rounded-2xl hidden lg:block max-w-[240px]">
            <p className="text-slate-950 font-bold italic">
              "To see a world in a grain of sand..."
            </p>
            <p className="text-slate-900/70 text-sm mt-2 font-medium">
              — William Blake
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
