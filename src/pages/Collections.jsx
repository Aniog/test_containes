import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const collections = [
  {
    id: 'everyday-gold',
    name: 'Everyday Gold',
    subtitle: 'Pieces for daily elegance',
    description: 'Minimal, wearable designs that complement every moment of your day.',
  },
  {
    id: 'evening-luxe',
    name: 'Evening Luxe',
    subtitle: 'Statement sophistication',
    description: 'Bold, sculptural pieces designed to captivate after dark.',
  },
  {
    id: 'bridal-whisper',
    name: 'Bridal Whisper',
    subtitle: 'Forever moments',
    description: 'Delicate treasures for the most meaningful day of your life.',
  },
];

const Collections = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24 pb-16 md:pb-24">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs tracking-widest uppercase text-velmora-gold mb-3">Curated</p>
          <h1 className="font-serif text-3xl md:text-4xl text-velmora-espresso">Collections</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((col) => (
            <Link
              key={col.id}
              to="/shop"
              className="group relative aspect-[3/4] rounded-sm overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-velmora-sand/30 transition-transform duration-700 group-hover:scale-105"
                data-strk-bg-id={`collection-${col.id}`}
                data-strk-bg={`gold jewelry ${col.name} elegant collection`}
                data-strk-bg-ratio="3x4"
                data-strk-bg-width="800"
              />
              <div className="absolute inset-0 bg-velmora-charcoal/35 group-hover:bg-velmora-charcoal/45 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <p className="text-xs tracking-widest uppercase text-velmora-goldlight mb-3">{col.subtitle}</p>
                <h2 className="font-serif text-2xl md:text-3xl text-velmora-ivory mb-3">{col.name}</h2>
                <p className="text-sm text-velmora-sand max-w-xs">{col.description}</p>
                <span className="mt-6 text-xs tracking-widest uppercase text-velmora-goldlight border-b border-velmora-goldlight pb-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
