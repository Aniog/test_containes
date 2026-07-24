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
    <section ref={containerRef} className="py-0 bg-parchment">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto md:min-h-[560px] overflow-hidden">
            <img
              data-strk-img-id="story-img-c3d4e5"
              data-strk-img="[story-text] [story-heading]"
              data-strk-img-ratio="1x1"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 md:py-20">
            <p className="font-sans text-xs tracking-ultra-wide uppercase text-champagne mb-4">
              Our Story
            </p>
            <h2
              id="story-heading"
              className="font-serif text-4xl md:text-5xl text-obsidian font-light leading-tight"
            >
              Made with<br />
              <em className="italic">intention</em>
            </h2>
            <p
              id="story-text"
              className="mt-6 text-sm md:text-base text-warm-gray font-sans leading-relaxed"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune or compromise your values. We design each piece to be worn daily — to the office, to dinner, to wherever life takes you.
            </p>
            <p className="mt-4 text-sm md:text-base text-warm-gray font-sans leading-relaxed">
              Every piece is crafted from hypoallergenic materials and finished with thick 18K gold plating that lasts. Because you deserve jewelry that keeps up with you.
            </p>
            <Link
              to="/about"
              className="mt-8 self-start font-sans text-xs tracking-widest uppercase text-obsidian border-b border-obsidian pb-0.5 hover:text-champagne hover:border-champagne transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
