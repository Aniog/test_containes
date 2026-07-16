import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-20 md:pt-24">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <div
          className="absolute inset-0"
          data-strk-bg-id="about-hero-bg-d1e2f3"
          data-strk-bg="[about-hero-subtitle] [about-hero-title] jewelry craftsmanship atelier"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
          <h1
            id="about-hero-title"
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-wide"
          >
            Our Story
          </h1>
          <p
            id="about-hero-subtitle"
            className="mt-4 text-sm md:text-base text-white/80 font-sans tracking-wide max-w-lg"
          >
            Where art meets adornment
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl text-brand-warm-black tracking-wide">
              Born from a Belief
            </h2>
            <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
          </div>

          <div className="space-y-6 text-sm md:text-base text-brand-warm-gray font-sans leading-relaxed">
            <p>
              Velmora was founded on a simple conviction: luxury should be lived in, not locked away. We believe every woman deserves jewelry that feels as extraordinary as it looks — without the extraordinary price tag.
            </p>
            <p>
              Our pieces are crafted with 18K gold plating over 925 sterling silver, designed to move with you through every moment of your day. From morning coffee to evening celebrations, Velmora jewelry is made to be worn, not stored.
            </p>
            <p>
              We work with artisan jewelers who share our obsession with detail. Every curve, every clasp, every finish is considered. The result is demi-fine jewelry that rivals pieces costing ten times more — because we believe quality and accessibility should go hand in hand.
            </p>
            <p>
              Sustainability is woven into everything we do. From recycled packaging to ethical sourcing, we're committed to creating beauty that doesn't cost the earth. Because the most precious thing about jewelry should be the joy it brings.
            </p>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-block bg-brand-gold text-white text-xs tracking-ultra-wide uppercase font-sans font-medium px-10 py-3.5 hover:bg-brand-gold-light transition-colors duration-300"
            >
              Explore the Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-brand-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
            <div className="text-center">
              <h3 className="font-serif text-2xl text-brand-warm-black mb-3">Artisan Crafted</h3>
              <div className="w-8 h-px bg-brand-gold mx-auto mb-4" />
              <p className="text-sm text-brand-warm-gray font-sans leading-relaxed">
                Each piece is hand-finished by skilled artisans, ensuring every detail meets our exacting standards of quality and beauty.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl text-brand-warm-black mb-3">Ethically Sourced</h3>
              <div className="w-8 h-px bg-brand-gold mx-auto mb-4" />
              <p className="text-sm text-brand-warm-gray font-sans leading-relaxed">
                We partner with responsible suppliers and use recycled materials wherever possible, because luxury shouldn't come at a cost to our planet.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl text-brand-warm-black mb-3">Made to Last</h3>
              <div className="w-8 h-px bg-brand-gold mx-auto mb-4" />
              <p className="text-sm text-brand-warm-gray font-sans leading-relaxed">
                Our 18K gold plating over sterling silver is designed to age gracefully, becoming more uniquely yours with every wear.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
