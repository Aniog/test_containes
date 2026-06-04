import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import TextureGallery from '@/components/gallery/TextureGallery';

export default function DustAndLight() {
  const heroRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current);
  }, []);

  return (
    <div className="bg-charcoal-earth min-h-screen">
      {/* Hero */}
      <div ref={heroRef} className="relative h-72 md:h-[500px] overflow-hidden">
        <img
          data-strk-img-id="dust-light-hero-banner-7f3a2b"
          data-strk-img="[dust-hero-sub] [dust-hero-title]"
          data-strk-img-ratio="16x9"
          data-strk-img-width="1600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          alt="Savanna textures"
          className="parallax-hero w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-earth/20 via-dusk-brown/30 to-charcoal-earth" />
        <div className="heat-haze-overlay" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-deep-ochre" />
            <span className="font-sans text-xs tracking-widest uppercase text-deep-ochre">
              Texture & Form
            </span>
            <div className="h-px w-12 bg-deep-ochre" />
          </div>
          <h1
            id="dust-hero-title"
            className="font-serif text-5xl md:text-7xl font-bold text-ash italic"
          >
            Dust & Light
          </h1>
          <p
            id="dust-hero-sub"
            className="font-sans text-savanna-sand/80 text-lg mt-4 max-w-2xl leading-relaxed"
          >
            The Serengeti speaks in textures — in the cracked earth of the dry season,
            the rough hide of an elephant, the silhouette of an acacia at golden hour.
          </p>
        </div>
      </div>

      {/* Pull quote */}
      <div className="border-y border-burnt-orange/20 py-10 px-6 bg-dusk-brown/30">
        <blockquote className="max-w-3xl mx-auto text-center">
          <p className="font-serif text-2xl md:text-3xl italic text-savanna-sand leading-relaxed">
            "The plains are not empty. They are full of everything that matters."
          </p>
          <cite className="font-sans text-xs tracking-widest uppercase text-burnt-orange/70 mt-4 block not-italic">
            — Field Notes, Serengeti
          </cite>
        </blockquote>
      </div>

      {/* Gallery */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-serif text-3xl font-bold text-ash">The Texture Collection</h2>
            <p className="font-sans text-savanna-sand/60 text-sm mt-1">
              Click any image to view full size
            </p>
          </div>
          <div className="hidden md:block font-sans text-xs tracking-widest uppercase text-savanna-sand/30">
            {10} Photographs
          </div>
        </div>

        <TextureGallery />
      </section>

      {/* Footer strip */}
      <div className="border-t border-savanna-sand/10 py-12 px-6 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="h-px w-16 bg-burnt-orange/40" />
          <span className="pulse-dot w-2 h-2 rounded-full bg-burnt-orange inline-block" />
          <div className="h-px w-16 bg-burnt-orange/40" />
        </div>
        <p className="font-serif text-lg italic text-savanna-sand/50">
          Serengeti Pulse — Documenting the wild heart of Africa
        </p>
      </div>
    </div>
  );
}
