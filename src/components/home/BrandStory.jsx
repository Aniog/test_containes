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
    <section ref={containerRef} id="story" className="bg-parchment">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-b1c2d3"
              data-strk-img="[story-body] [story-headline]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story — jewelry craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 md:px-16 py-16 md:py-20">
            <div className="max-w-md">
              <p className="font-sans text-[10px] tracking-widest uppercase text-champagne mb-5">
                Our Story
              </p>
              <h2 id="story-headline" className="font-serif text-4xl md:text-5xl text-velvet font-light leading-tight mb-6">
                Born from a love of<br />
                <em className="italic">quiet beauty</em>
              </h2>
              <div className="w-10 h-px bg-champagne mb-7" />
              <p id="story-body" className="font-sans text-sm text-stone leading-relaxed mb-4">
                Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion. We create demi-fine pieces designed to be worn every day — to the office, to dinner, to wherever life takes you.
              </p>
              <p className="font-sans text-sm text-stone leading-relaxed mb-8">
                Each piece is crafted with 18K gold plating over sterling silver, using hypoallergenic materials that are gentle on sensitive skin. We believe in accessible luxury — jewelry that feels precious without the precious price tag.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase text-velvet border-b border-velvet/30 pb-0.5 hover:border-champagne hover:text-champagne transition-colors duration-300"
              >
                Read Our Story
                <span className="text-champagne">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
