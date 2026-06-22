import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Microscope, Droplet, Zap, Sprout } from 'lucide-react';

const realms = [
  {
    id: 'biology',
    name: 'Cellular Frontiers',
    icon: Sprout,
    desc: 'The fundamental units of life, each a microscopic city of incredible activity.',
    color: 'text-emerald-400'
  },
  {
    id: 'aquatic',
    name: 'Aquatic Abyss',
    icon: Droplet,
    desc: 'Exploring the diverse ecosystems found in a single drop of pond water.',
    color: 'text-cyan-400'
  },
  {
    id: 'physics',
    name: 'Crystalline Order',
    icon: Zap,
    desc: 'The rigid beauty and geometric perfection of molecular lattice structures.',
    color: 'text-amber-400'
  }
];

const FeatureSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="features" ref={containerRef} className="py-24 bg-[#0a0a0c]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {realms.map((realm) => (
            <div 
              key={realm.id}
              className="bg-[#121216] border border-white/5 p-8 rounded-3xl hover:border-cyan-400/30 transition-all duration-300 group"
            >
              <div className="mb-6 relative h-48 rounded-2xl overflow-hidden shadow-inner bg-[#0a0a0c]">
                <img 
                  data-strk-img-id={`realm-img-${realm.id}`}
                  data-strk-img={`[realm-name-${realm.id}] [realm-desc-${realm.id}] microscopic world`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={realm.name}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <realm.icon className={`w-6 h-6 ${realm.color}`} />
                <h3 
                  id={`realm-name-${realm.id}`}
                  className="text-2xl font-bold text-slate-100"
                >
                  {realm.name}
                </h3>
              </div>
              <p 
                id={`realm-desc-${realm.id}`}
                className="text-slate-400 leading-relaxed"
              >
                {realm.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
