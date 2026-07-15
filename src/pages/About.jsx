import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="pt-20 md:pt-24" ref={containerRef}>
      {/* Hero section */}
      <div className="relative h-[50vh] min-h-[400px] bg-ink">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-p9q0"
          data-strk-bg="[about-heading] [about-subtitle]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/20" />
        <div className="relative z-10 h-full flex items-end pb-12 px-6 md:px-12 lg:px-16 max-w-7xl mx-auto">
          <div>
            <h1 id="about-heading" className="text-4xl md:text-5xl lg:text-6xl font-serif text-white">
              Our Story
            </h1>
            <p id="about-subtitle" className="text-white/60 font-sans text-sm mt-2 max-w-md">
              The vision behind Velmora Fine Jewelry
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24">
        <div className="space-y-8 text-center">
          <p className="text-gold-500 text-xs tracking-widest uppercase font-sans">Since 2020</p>
          <h2 className="text-3xl md:text-4xl font-serif text-ink leading-tight">
            Jewelry for the Modern Woman
          </h2>
          <div className="space-y-5 text-taupe-600 font-sans text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            <p>
              Velmora was born from a simple belief: that fine jewelry should not be reserved 
              for special occasions alone. We create pieces that are crafted to be worn every day — 
              to accompany you through morning meetings, evening dinners, and every moment in between.
            </p>
            <p>
              Each piece in our collection is designed in-house and crafted in 18K gold plated 
              finishes, using hypoallergenic materials that respect sensitive skin. We believe in 
              quality that lasts, design that endures, and prices that remain accessible.
            </p>
            <p>
              Our name, Velmora, is inspired by the Latin for "to be treasured." Every piece we 
              create is meant to be exactly that — treasured, worn, and passed down.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          {[
            { title: 'Quality First', text: 'Premium 18K gold plating with stringent quality control.' },
            { title: 'Ethical Craft', text: 'Responsibly sourced materials and fair labor practices.' },
            { title: 'Accessible Luxury', text: 'Designer quality at demi-fine prices, always.' },
          ].map((v) => (
            <div key={v.title} className="text-center">
              <div className="w-12 h-px bg-gold-500 mx-auto mb-4" />
              <h3 className="text-sm font-serif text-ink uppercase tracking-wider mb-2">{v.title}</h3>
              <p className="text-xs text-taupe-500 font-sans leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}