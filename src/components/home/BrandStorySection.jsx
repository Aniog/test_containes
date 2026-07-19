import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-16 md:py-24 bg-ivory-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/5]">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              data-strk-img-id="brand-story-img-c4d5e6"
              data-strk-img="[brand-story-body] [brand-story-heading]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              className="w-full h-full object-cover"
            />
            {/* Decorative gold border */}
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-gold/20 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center">
            <p className="font-inter text-xs uppercase tracking-[0.2em] text-gold mb-4">Our Story</p>
            <h2
              id="brand-story-heading"
              className="font-cormorant text-3xl md:text-4xl lg:text-5xl font-light text-espresso tracking-wide leading-tight mb-6"
            >
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-6" />
            <p
              id="brand-story-body"
              className="font-inter text-sm text-stone leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We create demi-fine pieces designed to be worn every day — to work, to dinner, to wherever life takes you.
            </p>
            <p className="font-inter text-sm text-stone leading-relaxed mb-8">
              Each piece is crafted from 18K gold-plated brass and sterling silver, hypoallergenic and built to last. We believe in accessible luxury — jewelry that feels precious without the precious price tag.
            </p>
            <Link
              to="/#about"
              className="inline-flex items-center gap-2 font-inter text-xs uppercase tracking-[0.15em] text-espresso hover:text-gold transition-colors duration-300 group"
            >
              Our Story
              <span className="w-6 h-px bg-current transition-all duration-300 group-hover:w-10" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
