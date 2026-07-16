import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-cream border-t border-blush">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px]">
          {/* Image side */}
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
            <img
              data-strk-img-id="brand-story-img-c4d5e6"
              data-strk-img="[brand-story-text] [brand-story-heading]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story — jewelry craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text side */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="text-xs font-manrope uppercase tracking-widest text-gold mb-4">Our Story</p>
            <h2
              id="brand-story-heading"
              className="font-cormorant font-light text-4xl md:text-5xl text-charcoal leading-tight mb-6"
            >
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-6" />
            <p
              id="brand-story-text"
              className="text-sm font-manrope text-stone leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We create demi-fine pieces designed to be worn every day — to work, to dinner, to wherever life takes you.
            </p>
            <p className="text-sm font-manrope text-stone leading-relaxed mb-8">
              Each piece is crafted in 18K gold-plated brass and sterling silver, hypoallergenic and built to last. We believe in accessible luxury — jewelry that feels as good as it looks.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-manrope uppercase tracking-widest text-charcoal hover:text-gold transition-colors group"
            >
              Read Our Story
              <span className="w-6 h-px bg-charcoal group-hover:bg-gold group-hover:w-10 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
