import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import SpeciesGrid from '@/components/species/SpeciesGrid';

export default function SpeciesArchive() {
  const heroRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current);
  }, []);

  return (
    <div className="bg-charcoal-earth min-h-screen">
      {/* Hero banner */}
      <div ref={heroRef} className="relative h-72 md:h-96 overflow-hidden">
        <img
          data-strk-img-id="species-hero-banner-6e4c2a"
          data-strk-img="[species-hero-title] [species-hero-sub]"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="African wildlife panorama"
          className="parallax-hero w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-earth/30 via-transparent to-charcoal-earth" />
        <div className="heat-haze-overlay" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-burnt-orange" />
            <span className="font-sans text-xs tracking-widest uppercase text-burnt-orange">
              Serengeti Pulse
            </span>
            <div className="h-px w-12 bg-burnt-orange" />
          </div>
          <h1
            id="species-hero-title"
            className="font-serif text-5xl md:text-7xl font-bold text-ash"
          >
            Species Archive
          </h1>
          <p
            id="species-hero-sub"
            className="font-sans text-savanna-sand/80 text-lg mt-4 max-w-xl"
          >
            Portraits of the wild — every creature a story written in fur, feather, and instinct.
          </p>
        </div>
      </div>

      {/* Grid section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="font-serif text-3xl font-bold text-ash">The Inhabitants</h2>
            <p className="font-sans text-savanna-sand/60 text-sm mt-1">
              Hover over each portrait to reveal their world
            </p>
          </div>
          <div className="hidden md:flex items-center gap-2 text-savanna-sand/40 font-sans text-xs tracking-widest uppercase">
            <span>9 Species</span>
            <div className="w-1 h-1 rounded-full bg-burnt-orange" />
            <span>Documented</span>
          </div>
        </div>

        <SpeciesGrid />
      </section>
    </div>
  );
}
