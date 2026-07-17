import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
            <div
              data-strk-img-id="brand-story-img-k7m2p9"
              data-strk-img="[brand-story-text] [brand-story-title] artisan gold jewelry craft"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              className="absolute inset-0 bg-ink-700"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gold-300/20 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gold-400/30" />
                </div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="py-4 lg:py-8">
            <p className="section-subtitle mb-4">Our story</p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-ink-800 leading-[1.15] mb-6"
            >
              Jewelry That Feels Like You
            </h2>
            <p
              id="brand-story-text"
              className="font-sans text-ink-500 leading-relaxed mb-6"
            >
              Velmora was born from a simple belief: beautiful jewelry shouldn't cost a fortune or come with compromise. We craft demi-fine pieces using 18K gold plating over surgical-grade materials — creating jewelry that looks luxurious, feels comfortable, and lasts.
            </p>
            <p className="font-sans text-ink-500 leading-relaxed mb-8">
              Every piece is designed for the modern woman who wants to feel put-together without trying too hard. Whether you're dressing up for a dinner or layering for a Tuesday at the office, Velmora fits seamlessly into your life.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-sm tracking-widest uppercase text-gold-600 hover:text-gold-500 transition-colors border-b border-gold-400 pb-1"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
