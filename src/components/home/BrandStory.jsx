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
    <section id="about" ref={containerRef} className="bg-velmora-stone">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="brand-story-img-b1c2d3"
              data-strk-img="[brand-story-text] [brand-story-title]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-sans text-xs tracking-widest uppercase text-velmora-gold mb-4">Our Story</p>
            <h2 id="brand-story-title" className="font-serif text-4xl md:text-5xl font-light text-velmora-ink leading-tight mb-6">
              Made with<br />
              <em className="italic">intention</em>
            </h2>
            <div className="w-10 h-px bg-velmora-gold mb-8" />
            <p id="brand-story-text" className="font-sans text-sm text-velmora-muted leading-relaxed mb-4">
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. We design each piece with the modern woman in mind — someone who moves through the world with intention, who values quality over quantity.
            </p>
            <p className="font-sans text-sm text-velmora-muted leading-relaxed mb-8">
              Every Velmora piece is crafted from 18K gold-plated brass, hypoallergenic and designed to be worn every day. From the studio to your jewelry box, we believe in slow design, thoughtful materials, and jewelry that tells your story.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-3 font-sans text-xs tracking-widest uppercase text-velmora-ink hover:text-velmora-gold transition-colors group"
            >
              Read Our Story
              <span className="w-8 h-px bg-velmora-ink group-hover:bg-velmora-gold group-hover:w-12 transition-all duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
