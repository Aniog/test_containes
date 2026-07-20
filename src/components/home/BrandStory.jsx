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
    <section
      ref={containerRef}
      id="about"
      className="py-20 md:py-0 bg-velmora-cream border-t border-velmora-sand"
    >
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] overflow-hidden">
          <div
            data-strk-bg-id="brand-story-bg-4c5d6e"
            data-strk-bg="[brand-story-body] [brand-story-title]"
            data-strk-bg-ratio="4x3"
            data-strk-bg-width="900"
            className="absolute inset-0 w-full h-full bg-cover bg-center"
          />
          <div className="absolute inset-0 bg-velmora-obsidian/10" />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-20 py-16 md:py-20">
          <p className="font-manrope text-xs tracking-widest uppercase text-velmora-gold mb-5">
            Our Story
          </p>
          <h2
            id="brand-story-title"
            className="font-cormorant text-4xl md:text-5xl font-light text-velmora-text-dark leading-tight"
          >
            Made with intention,<br />
            <em className="italic">worn with love</em>
          </h2>
          <p
            id="brand-story-body"
            className="font-manrope text-sm text-velmora-text-mid mt-6 leading-relaxed"
          >
            Velmora was born from a simple belief: that beautiful jewelry shouldn't come with a compromise. We design each piece to be hypoallergenic, ethically sourced, and crafted to last — so you can wear it every day without worry.
          </p>
          <p className="font-manrope text-sm text-velmora-text-mid mt-4 leading-relaxed">
            Our demi-fine collection bridges the gap between costume and fine jewelry, offering the warmth of 18K gold plating at a price that feels as good as it looks.
          </p>
          <Link
            to="/#about"
            className="inline-flex items-center gap-3 mt-8 font-manrope text-xs tracking-widest uppercase text-velmora-text-dark hover:text-velmora-gold transition-colors duration-200 self-start"
          >
            <span>Read Our Story</span>
            <div className="w-8 h-px bg-current" />
          </Link>
        </div>
      </div>
    </section>
  );
}
