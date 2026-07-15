import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="py-16 md:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="aspect-[4/5] bg-cream-200 rounded-sm overflow-hidden">
            <img
              alt="Velmora craftsmanship"
              data-strk-img-id="story-img-n7o8"
              data-strk-img="[story-heading] [story-text]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-md">
            <p className="text-gold-500 text-xs tracking-widest uppercase font-sans mb-3">Our Story</p>
            <h2 id="story-heading" className="text-3xl md:text-4xl font-serif text-ink leading-tight">
              Jewelry That Travels Through Generations
            </h2>
            <p id="story-text" className="text-taupe-500 font-sans text-sm md:text-base leading-relaxed mt-5">
              At Velmora, we believe fine jewelry should be accessible without compromise. 
              Each piece is crafted in 18K gold plated finishes, designed to transition from 
              desk to dinner, from everyday to heirloom.
            </p>
            <p className="text-taupe-500 font-sans text-sm md:text-base leading-relaxed mt-4">
              Our collections are inspired by the quiet beauty of modern women — strong, 
              elegant, and effortlessly themselves.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 mt-6 text-sm font-sans font-medium text-ink uppercase tracking-wider hover:text-gold-500 transition-colors group"
            >
              Read More
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}