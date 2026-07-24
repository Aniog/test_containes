import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    window.scrollTo(0, 0);
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-f1g2h3"
          data-strk-bg="[about-hero-title] jewelry craftsmanship artisan workshop"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 bg-charcoal/50" />
        <h1
          id="about-hero-title"
          className="relative z-10 font-serif text-4xl md:text-5xl font-light text-white"
        >
          Our Story
        </h1>
      </section>

      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <p className="text-base md:text-lg text-charcoal leading-relaxed font-serif">
          Velmora was born from a simple belief: that beautiful jewelry should be accessible
          without compromising on quality or design. Founded in 2022, we set out to create
          demi-fine pieces that bridge the gap between costume jewelry and fine jewelry.
        </p>
        <p className="mt-6 text-sm md:text-base text-muted leading-relaxed">
          Every Velmora piece is crafted with 18K gold plating over hypoallergenic base metals,
          ensuring both beauty and comfort. Our designs draw inspiration from architectural forms,
          natural textures, and the quiet confidence of the modern woman.
        </p>
        <p className="mt-6 text-sm md:text-base text-muted leading-relaxed">
          We work directly with skilled artisans, cutting out the middlemen to offer premium
          quality at accessible prices. From our studio to your jewelry box, each piece is
          thoughtfully designed to become part of your everyday ritual.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-border pt-12">
          <div>
            <p className="font-serif text-3xl text-accent">18K</p>
            <p className="mt-2 text-xs font-sans font-medium tracking-wide uppercase text-muted">Gold Plated</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-accent">100%</p>
            <p className="mt-2 text-xs font-sans font-medium tracking-wide uppercase text-muted">Hypoallergenic</p>
          </div>
          <div>
            <p className="font-serif text-3xl text-accent">30 Day</p>
            <p className="mt-2 text-xs font-sans font-medium tracking-wide uppercase text-muted">Free Returns</p>
          </div>
        </div>
      </section>
    </div>
  );
}
