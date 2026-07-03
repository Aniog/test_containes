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
    <section ref={containerRef} className="py-20 md:py-28 bg-parchment">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/5] md:aspect-auto">
            <img
              data-strk-img-id="brand-story-img-x1y2z3"
              data-strk-img="[brand-story-text] [brand-story-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story — jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
            {/* Warm tint */}
            <div className="absolute inset-0 bg-champagne/10 mix-blend-multiply" />
          </div>

          {/* Text */}
          <div
            className="flex items-center px-8 md:px-14 py-14 md:py-20"
            style={{ backgroundColor: '#1A1714' }}
          >
            <div className="max-w-md">
              <p className="font-manrope text-xs uppercase tracking-widest mb-5" style={{ color: '#C9A96E' }}>
                Our Story
              </p>
              <h2
                id="brand-story-title"
                className="font-cormorant text-4xl md:text-5xl font-light leading-tight mb-6"
                style={{ color: '#FAF7F2' }}
              >
                Born from a love of<br />
                <em className="italic" style={{ color: '#E8D5A3' }}>lasting beauty</em>
              </h2>
              <div className="w-10 h-px bg-champagne mb-8" />
              <p
                id="brand-story-text"
                className="font-manrope text-sm leading-relaxed mb-4"
                style={{ color: 'rgba(250,247,242,0.60)' }}
              >
                Velmora was founded on a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. Every piece is designed in our studio and crafted with 18K gold plating over hypoallergenic bases.
              </p>
              <p className="font-manrope text-sm leading-relaxed mb-10" style={{ color: 'rgba(250,247,242,0.60)' }}>
                We believe in slow fashion — pieces you reach for every day, that become part of your story. Jewelry that's passed down, not thrown away.
              </p>
              <Link
                to="/about"
                className="inline-block font-manrope text-xs uppercase tracking-widest px-8 py-3 hover:bg-champagne transition-all duration-300"
                style={{ border: '1px solid #C9A96E', color: '#C9A96E' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#1A1714'; }}
                onMouseLeave={e => { e.currentTarget.style.color = '#C9A96E'; }}
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
