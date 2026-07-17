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
    <section ref={containerRef} className="bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[560px] overflow-hidden bg-obsidian">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="brand-story-img-s2t4u6"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 md:px-16 py-16 md:py-20">
            <div className="max-w-md">
              <p className="font-sans text-xs uppercase tracking-widest3 text-champagne mb-4 font-medium">
                Our Story
              </p>
              <h2
                id="brand-story-title"
                className="font-serif text-3xl md:text-4xl font-light text-velvet leading-snug mb-6"
              >
                Made with intention,<br />
                <em className="not-italic text-champagne">worn with love</em>
              </h2>
              <div className="w-8 h-px bg-champagne mb-6" />
              <p
                id="brand-story-desc"
                className="font-sans text-sm text-stone leading-relaxed mb-4"
              >
                Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. We design each piece with the modern woman in mind — someone who moves through the world with intention and grace.
              </p>
              <p className="font-sans text-sm text-stone leading-relaxed mb-8">
                Every Velmora piece is crafted from 18K gold plated brass, hypoallergenic and designed to last. We believe in slow fashion, thoughtful design, and jewelry that becomes part of your story.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-sans text-xs uppercase tracking-widest text-champagne hover:text-gold transition-colors border-b border-champagne pb-0.5"
              >
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
