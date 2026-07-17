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
    <section id="story" ref={containerRef} className="bg-ivory-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Image */}
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[560px] overflow-hidden">
          <img
            data-strk-img-id="story-img-velmora-b1c2d3"
            data-strk-img="[story-body] [story-heading]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="800"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Velmora brand story"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-16 md:py-20">
          <p className="font-sans text-xs uppercase tracking-widest text-gold mb-5">
            Our Story
          </p>
          <h2 id="story-heading" className="font-serif text-3xl md:text-4xl font-light text-obsidian leading-snug">
            Born from a love of<br />
            <em className="italic">enduring beauty</em>
          </h2>
          <p id="story-body" className="font-sans text-sm text-text-secondary mt-6 leading-relaxed">
            Velmora was founded on a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We create demi-fine pieces designed to be worn every day — to work, to dinner, to wherever life takes you.
          </p>
          <p className="font-sans text-sm text-text-secondary mt-4 leading-relaxed">
            Each piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be treasured. We believe in accessible luxury — jewelry that feels premium without the premium price tag.
          </p>
          <Link
            to="/"
            className="mt-8 self-start font-sans text-xs uppercase tracking-widest text-gold border-b border-gold pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors duration-300"
          >
            Read Our Story →
          </Link>
        </div>
      </div>
    </section>
  );
}
