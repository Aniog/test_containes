import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '../../strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden">
            <div
              data-strk-bg-id="brand-story-bg"
              data-strk-bg="jewelry artisan workshop gold crafting warm light editorial"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
              className="absolute inset-0 bg-cover bg-center bg-cream-200"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="font-sans text-xs tracking-widest uppercase text-gold-500 mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6 leading-snug">
              Jewelry That Feels Like You
            </h2>
            <div className="w-12 h-px bg-gold-300 mb-6" />
            <div className="space-y-4 text-gray-500 font-sans text-sm leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that feels 
                luxurious without the luxury price tag. We craft demi-fine pieces using 18K gold 
                plating over quality brass, designed to last through everyday wear.
              </p>
              <p>
                Each piece is thoughtfully designed in our studio, drawing inspiration from 
                timeless aesthetics and modern sensibilities. We obsess over details — from the 
                weight of a huggie to the curve of a drop earring — because we know these small 
                things matter.
              </p>
              <p>
                Our commitment goes beyond beautiful jewelry. Every piece is hypoallergenic, 
                nickel-free, and comes with a 30-day happiness guarantee. Because wearing 
                Velmora should always feel effortless.
              </p>
            </div>
            <Link
              to="#"
              className="inline-block mt-8 font-sans text-xs tracking-widest uppercase text-gold-600 border-b border-gold-300 pb-1 hover:text-gold-700 transition-colors"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
