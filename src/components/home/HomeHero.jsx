import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '@/components/ui/Button';
import JewelryImage from '@/components/ui/JewelryImage';
import { useStrkImages } from '@/lib/useStrkImages';

export default function HomeHero() {
  const ref = useRef(null);
  useStrkImages(ref, []);

  return (
    <section ref={ref} className="relative w-full h-screen min-h-[640px] max-h-[920px] overflow-hidden bg-espresso">
      {/* Hero image, full bleed */}
      <div className="absolute inset-0">
        <JewelryImage
          imgId="velmora-hero-main-9c4f1a"
          query="[hero-headline] [hero-subhead]"
          fallbackQuery="editorial close up gold jewelry on model warm light dark background"
          ratio="16x9"
          width={2200}
          kind="earring"
          theme="warm"
          alt="A model wears Velmora gold jewelry, lit by warm light."
          className="absolute inset-0 w-full h-full"
        />
      </div>

      {/* Overlay gradient for legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'linear-gradient(180deg, rgba(31,26,20,0.35) 0%, rgba(31,26,20,0.15) 35%, rgba(31,26,20,0.55) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-5 md:px-8 lg:px-12 flex flex-col">
        <div className="flex-1" />
        <div className="pb-20 md:pb-32 max-w-3xl animate-fadeUp">
          <span className="inline-block text-[11px] uppercase tracking-[0.3em] text-gold-soft font-sans">
            New Season · Demi-Fine 18K Gold
          </span>
          <h1
            id="hero-headline"
            className="mt-6 font-serif font-light text-cream text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02]"
          >
            Crafted to be
            <br />
            <em className="not-italic text-gold-soft">Treasured.</em>
          </h1>
          <p
            id="hero-subhead"
            className="mt-7 text-cream/85 text-base md:text-lg max-w-xl font-sans leading-relaxed"
          >
            Heirloom-feel earrings, necklaces, and huggies — handcrafted in
            small batches, in 18K gold-plated brass that warms with every wear.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button as={Link} to="/shop" variant="primary" size="lg">
              Shop the Collection
            </Button>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-cream hover:text-gold-soft text-[11px] uppercase tracking-[0.25em] font-sans transition-colors"
            >
              Our Story <ArrowRight size={14} strokeWidth={1.4} />
            </Link>
          </div>
        </div>
      </div>

      {/* Soft scroll hint */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-[10px] uppercase tracking-[0.3em] text-cream/70 font-sans">
          Scroll
        </span>
        <span className="block w-px h-10 bg-cream/40" />
      </div>
    </section>
  );
}
