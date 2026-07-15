import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-velvet-100">
            <img
              data-strk-img-id="brand-story-img"
              data-strk-img="[brand-story-heading] [brand-story-text]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="section-subtitle mb-4">Our Story</p>
            <h2 id="brand-story-heading" className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink leading-tight mb-6">
              Jewelry That <span className="italic">Moves</span> With You
            </h2>
            <p id="brand-story-text" className="text-ink-lighter leading-relaxed mb-6">
              Velmora was born from a simple belief: fine jewelry shouldn't be reserved for special occasions. 
              Every piece is designed for the everyday — durable enough for your morning routine, 
              elegant enough for an evening out. We use 18K gold plating and hypoallergenic materials 
              so you never have to choose between comfort and style.
            </p>
            <p className="text-ink-lighter leading-relaxed mb-8">
              From our workshop to your jewelry box, each piece is crafted with care, 
              packed with intention, and priced with honesty.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-ink font-medium border-b border-ink pb-1 hover:text-gold-500 hover:border-gold-500 transition-colors"
            >
              Read Our Story <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}