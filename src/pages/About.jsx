import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="bg-brand-cream pt-20 md:pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl text-brand-charcoal tracking-wide mb-4">
            Our Story
          </h1>
          <div className="w-12 h-px bg-brand-gold mx-auto" />
        </div>

        {/* Image + text */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center mb-20">
          <div className="aspect-[4x5] overflow-hidden">
            <img
              data-strk-img-id="about-hero-g7h8i9"
              data-strk-img="[about-mission] [about-heading] velmora jewelry studio craftsmanship"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora studio"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 id="about-heading" className="font-serif text-2xl md:text-3xl text-brand-charcoal tracking-wide mb-6">
              Jewelry for the Everyday
            </h2>
            <p id="about-mission" className="text-brand-muted font-sans text-sm leading-relaxed mb-4">
              Velmora was born from a simple belief: fine jewelry should be part of your everyday, not locked away for special occasions. We design demi-fine pieces that carry the weight and beauty of high jewelry, but are meant to be worn with your favorite t-shirt as much as your favorite dress.
            </p>
            <p className="text-brand-muted font-sans text-sm leading-relaxed mb-4">
              Every piece is crafted with 18K gold plating over sterling silver, using ethically sourced materials and hypoallergenic finishes. We skip the traditional retail markups so we can offer exceptional quality at an accessible price.
            </p>
            <p className="text-brand-muted font-sans text-sm leading-relaxed">
              Based in New York, our small team of designers draws inspiration from architecture, vintage textiles, and the quiet confidence of women who know their own style.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Craftsmanship',
              text: 'Each piece is designed in-house and finished by hand, ensuring every detail meets our exacting standards.',
            },
            {
              title: 'Integrity',
              text: 'We use only ethically sourced materials and transparent pricing. No middlemen, no markups, no compromises.',
            },
            {
              title: 'Sustainability',
              text: 'From recycled packaging to responsible sourcing, we are committed to reducing our footprint at every step.',
            },
          ].map((value) => (
            <div key={value.title} className="text-center px-4">
              <h3 className="font-serif text-xl text-brand-charcoal tracking-wide mb-3">
                {value.title}
              </h3>
              <div className="w-8 h-px bg-brand-gold mx-auto mb-4" />
              <p className="text-brand-muted font-sans text-sm leading-relaxed">
                {value.text}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/shop" className="btn-primary text-xs">
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
