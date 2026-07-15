import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg"
          data-strk-bg="[about-hero-subtitle] [about-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-charcoal-950/50" />
        <div className="relative z-10 text-center text-white px-5">
          <h1 id="about-hero-title" className="font-serif text-4xl md:text-6xl text-white mb-4">
            Our Story
          </h1>
          <p id="about-hero-subtitle" className="text-cream-100/70 text-sm md:text-base max-w-lg mx-auto">
            Crafting demi-fine jewelry for the modern woman since 2019
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-cream-50">
        <div className="container-page max-w-3xl mx-auto">
          <div className="space-y-8 text-charcoal-600 leading-relaxed">
            <p className="text-lg font-serif text-charcoal-900">
              Velmora was born from a simple belief: that extraordinary jewelry doesn't need an extraordinary price tag.
            </p>
            <p>
              Founded in 2019 by two sisters in London, Velmora bridges the gap between fast-fashion costume jewelry and unattainable fine jewelry. Every piece is plated in 18K gold and crafted with the same attention to detail you'd expect from legacy jewelers — but at a price that makes everyday luxury accessible.
            </p>
            <p>
              Our design philosophy is rooted in quiet confidence. We don't chase trends. We create pieces that feel personal, timeless, and meant to be layered into your life — whether that's a boardroom, a dinner date, or a quiet morning at home.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-charcoal-200">
              <div>
                <h3 className="font-serif text-lg text-charcoal-900 mb-2">Ethically Crafted</h3>
                <p className="text-sm text-charcoal-500">All our pieces are made with responsibly sourced materials and produced in small batches to minimize waste.</p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-charcoal-900 mb-2">Hypoallergenic</h3>
                <p className="text-sm text-charcoal-500">Our 18K gold plating is nickel-free and safe for sensitive skin — because luxury should never come with compromise.</p>
              </div>
              <div>
                <h3 className="font-serif text-lg text-charcoal-900 mb-2">Designed in London</h3>
                <p className="text-sm text-charcoal-500">Every sketch, every sample, every final piece passes through our London atelier, where design meets craft.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-velvet-50 text-center">
        <div className="container-page max-w-xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal-900 mb-4">
            Discover the Collection
          </h2>
          <p className="text-charcoal-500 mb-8">
            Explore our full range of earrings, necklaces, and huggies — each piece designed to be treasured.
          </p>
          <Link to="/shop" className="btn-accent">Shop Now</Link>
        </div>
      </section>
    </div>
  );
}
