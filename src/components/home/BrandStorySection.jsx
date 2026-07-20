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
    <section ref={containerRef} id="about" className="bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[500px] md:min-h-[600px]">
          {/* Image */}
          <div className="relative overflow-hidden min-h-[300px] md:min-h-0">
            <div
              className="absolute inset-0"
              data-strk-bg-id="brand-story-bg-c4d5e6"
              data-strk-bg="[brand-story-desc] [brand-story-heading] gold jewelry artisan crafted"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
              style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-velmora-obsidian/10" />
          </div>

          {/* Text */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-20">
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-6">
              Our Story
            </p>
            <h2
              id="brand-story-heading"
              className="font-cormorant text-4xl md:text-5xl text-velmora-obsidian leading-tight mb-6"
            >
              Made with intention,<br />
              <em className="italic">worn with love</em>
            </h2>
            <p
              id="brand-story-desc"
              className="font-manrope text-sm text-velmora-muted leading-relaxed mb-4"
            >
              Velmora was born from a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. We design each piece with the modern woman in mind — someone who values quality, sustainability, and timeless style.
            </p>
            <p className="font-manrope text-sm text-velmora-muted leading-relaxed mb-8">
              Every Velmora piece is crafted from 18K gold plated sterling silver, hypoallergenic and designed to be worn every day, from morning coffee to evening cocktails.
            </p>

            <div className="flex items-center gap-8 mb-10">
              <div>
                <p className="font-cormorant text-3xl text-velmora-obsidian">50K+</p>
                <p className="font-manrope text-xs uppercase tracking-widest text-velmora-subtle mt-1">Happy Customers</p>
              </div>
              <div className="w-px h-10 bg-velmora-linen" />
              <div>
                <p className="font-cormorant text-3xl text-velmora-obsidian">4.9★</p>
                <p className="font-manrope text-xs uppercase tracking-widest text-velmora-subtle mt-1">Average Rating</p>
              </div>
              <div className="w-px h-10 bg-velmora-linen" />
              <div>
                <p className="font-cormorant text-3xl text-velmora-obsidian">2019</p>
                <p className="font-manrope text-xs uppercase tracking-widest text-velmora-subtle mt-1">Founded</p>
              </div>
            </div>

            <Link
              to="/shop"
              className="inline-block self-start border border-velmora-obsidian text-velmora-obsidian font-manrope text-xs uppercase tracking-widest px-8 py-3.5 hover:bg-velmora-obsidian hover:text-velmora-ivory transition-all duration-300"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
