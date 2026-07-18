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
    <section ref={containerRef} className="section-padding py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-6xl mx-auto">
        {/* Image */}
        <div className="aspect-[4/5] md:aspect-auto bg-velmora-sand overflow-hidden">
          <img
            alt="Velmora craft"
            data-strk-img-id="brand-story-img-x1y2z3"
            data-strk-img="[brand-story-desc] [brand-story-title]"
            data-strk-img-ratio="4x5"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            className="w-full h-full object-cover"
          />
          <span className="hidden" id="brand-story-title">Our Story</span>
          <span className="hidden" id="brand-story-desc">fine jewelry craftsmanship studio</span>
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-6 md:px-12 lg:px-16 py-10 md:py-0 bg-white">
          <span className="text-[10px] tracking-[0.2em] uppercase text-velmora-gold mb-4">
            Our Story
          </span>
          <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl tracking-wide text-velmora-charcoal leading-tight">
            Jewelry That Tells Your Story
          </h2>
          <p className="mt-5 text-sm text-velmora-slate leading-relaxed max-w-md">
            Velmora was born from a simple belief: that fine jewelry should feel personal, not precious. 
            Every piece in our collection is designed in our Barcelona atelier, crafted in 18K gold plate 
            by artisans who treat each link, each stone, each curve as a small work of art.
          </p>
          <p className="mt-3 text-sm text-velmora-slate leading-relaxed max-w-md">
            We work directly with ethical suppliers, skip the traditional markups, and pass 
            the beauty — and the value — to you. Because the best jewelry isn't the loudest. 
            It's the piece you reach for every morning.
          </p>
          <Link to="/about" className="btn-outline mt-6 self-start">
            Discover More
          </Link>
        </div>
      </div>
    </section>
  );
}
