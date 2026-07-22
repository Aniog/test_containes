import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';
import { useScrollReveal } from '../../lib/hooks';

export default function BrandStory() {
  const { ref, isVisible } = useScrollReveal();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section ref={(node) => { ref.current = node; containerRef.current = node; }} className="py-section-mobile md:py-section bg-ivory">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div
            className={`transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="relative aspect-[4/5] bg-sand rounded-sm overflow-hidden">
              <img
                alt="Velmora jewelry artisan at work"
                data-strk-img-id="brand-story-img-e4f2a8"
                data-strk-img="[story-text] [story-title] gold jewelry artisan craft luxury"
                data-strk-img-ratio="3x4"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <p className="text-caption uppercase tracking-[0.2em] text-gold font-sans font-medium mb-4">
              Our Story
            </p>
            <h2 id="story-title" className="font-serif text-h2 text-charcoal mb-6">
              Jewelry That Tells Your Story
            </h2>
            <div id="story-text" className="space-y-4 text-stone font-sans text-base leading-relaxed mb-8">
              <p>
                Velmora was born from a simple belief: every woman deserves access to beautifully crafted jewelry that doesn't compromise on quality or break the bank.
              </p>
              <p>
                We work directly with skilled artisans who share our commitment to excellence, using only the finest materials — 18K gold plating over sterling silver, ethically sourced crystals, and hypoallergenic components that are gentle on even the most sensitive skin.
              </p>
              <p>
                Each piece is designed to be worn, loved, and treasured for years to come.
              </p>
            </div>
            <Link
              to="/about"
              className="inline-block px-8 py-3.5 border border-charcoal text-charcoal text-btn uppercase tracking-btn font-sans font-medium hover:bg-charcoal hover:text-white transition-colors duration-200 rounded-btn"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
