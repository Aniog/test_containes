import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Link } from 'react-router-dom';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-[#faf8f5]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <div
          className="aspect-[4/5] lg:aspect-auto bg-warm-100 overflow-hidden"
        >
          <img
            data-strk-img-id="brand-story-img-9f2e8a"
            data-strk-img="[brand-story-subtitle] [brand-story-title] jewelry workshop craftsmanship"
            data-strk-img-ratio="4x5"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Our Story"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-8 lg:px-20 py-16 lg:py-0">
          <p id="brand-story-subtitle" className="text-xs tracking-[0.12em] uppercase text-muted-foreground mb-4">
            Our Story
          </p>
          <h2 id="brand-story-title" className="font-serif text-3xl md:text-4xl tracking-wider leading-snug">
            Designed to be lived in. <br />
            Crafted to be treasured.
          </h2>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-md">
            Every Velmora piece is designed in our Stockholm atelier, where Scandinavian minimalism
            meets a reverence for timeless craftsmanship. We partner with ethical workshops to
            create demi-fine jewelry that feels as good as it looks — accessible luxury for the
            modern woman who knows that the best things in life are the ones you wear every day.
          </p>
          <Link
            to="/"
            className="mt-8 inline-block text-xs tracking-[0.15em] uppercase font-medium underline underline-offset-8 decoration-accent/50 hover:decoration-accent transition-colors"
          >
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
}
